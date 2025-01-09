const sendSuccessResponse = (res, statusCode, status, data, results = null) => {

    const successResponse = { status };

    if (results) {
        successResponse.results = results;
    }

    successResponse.data = data;

    return res.status(statusCode).json(successResponse);
};

module.exports = sendSuccessResponse;