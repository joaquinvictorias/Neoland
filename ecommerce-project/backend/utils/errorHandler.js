const sendErrorResponse = (res, statusCode, status, message, error = null) => {

    const errorResponse = { status, message };

    if (error) {
        errorResponse.error = error;
    };

    return res.status(statusCode).json(errorResponse);
};

module.exports = sendErrorResponse;