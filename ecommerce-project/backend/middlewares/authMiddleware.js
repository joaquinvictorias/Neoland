const jwt = require("jsonwebtoken");
const sendErrorResponse = require("../utils/errorHandler");

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return sendErrorResponse(res, 401, "fail", "Unauthorized");
        }

        const token = authHeader.replace("Bearer ", "");
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return sendErrorResponse(res, 401, "fail", "Expired Token");
        }

        if (error.name === "JsonWebTokenError") {
            return sendErrorResponse(res, 401, "fail", "Invalid Token");
        }

        console.error(error);

        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

module.exports = authenticate;