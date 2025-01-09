const User = require("../models/User");
const mongoose = require("mongoose");
const sendErrorResponse = require("../utils/errorHandler");
const sendSuccessResponse = require("../utils/successHandler");

// GET

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return sendSuccessResponse(res, 200, "success", { users }, users.length);
    } catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

// GET Params

const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }

        const user = await User.findById(id);

        if (!user) {
            return sendErrorResponse(res, 404, "fail", "User not found");
        }

        return sendSuccessResponse(res, 200, "success", { user });
    } catch (error) {
        console.error(error);

        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

// POST

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        return sendSuccessResponse(res, 201, "success", { user });
    } catch (error) {
        console.error(error);

        if (error.name === "ValidationError") {
            return sendErrorResponse(res, 400, "fail", "Validation error", error.errors);
        }

        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return sendErrorResponse(res, 400, "fail", `${field} is already in use`);
        }

        return sendErrorResponse(res, 500, "error", "Internal server error");
    }
};

// PUT

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }

        const user = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return sendErrorResponse(res, 404, "fail", "User not found");
        }

        return sendSuccessResponse(res, 200, "success", { user });
    } catch (error) {
        console.error(error);

        if (error.name === "ValidationError") {
            return sendErrorResponse(res, 400, "fail", "Validation error", error.errors);
        }

        if (error.message === "The password must contain at least 6 characters") {
            return sendErrorResponse(res, 400, "fail", error.message);
        }        
        
        return sendErrorResponse(res, 500, "error", "Internal server error");
    }
};

// DELETE

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return sendErrorResponse(res, 404, "fail", "User not found");
        }

        return sendSuccessResponse(res, 204, "success", null);
    } catch (error) {
        console.error(error);

        return sendErrorResponse(res, 500, "error", "Internal server error");
    }
};

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };