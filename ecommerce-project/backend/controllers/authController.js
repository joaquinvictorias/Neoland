const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sendErrorResponse = require("../utils/errorHandler");
const sendSuccessResponse = require("../utils/successHandler");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
}

const registerUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            return sendErrorResponse(res, 400, "fail", "User already exists");
        }

        const newUser = await User.create(user);

        return sendSuccessResponse(res, 201, "success", {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken(newUser._id)
        });

    } catch (error) {
        console.error(error);

        if (error.name === "ValidationError") {
            return sendErrorResponse(res, 400, "fail", "Validation error", error.errors);
        }

        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return sendErrorResponse(res, 400, "fail", `${field} is already in use`);
        }

        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return sendErrorResponse(res, 400, "fail", "Email is required");
        }

        if (!password) {
            return sendErrorResponse(res, 400, "fail", "Password is required");
        }

        const user = await User.findOne({ email });

        if (user && await user.matchPassword(password)) {
            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        }

        return sendErrorResponse(res, 401, "fail", "Invalid email or password");
    } catch (error) {
        console.error(error);

        if (error.name === "ValidationError") {
            return sendErrorResponse(res, 400, "fail", "Validation error", error.errors);
        }

        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return sendErrorResponse(res, 400, "fail", `${field} is already in use`);
        }

        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

module.exports = { registerUser, loginUser };