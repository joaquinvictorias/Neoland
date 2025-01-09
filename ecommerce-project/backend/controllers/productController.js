const Product = require("../models/Product");
const mongoose = require("mongoose");
const sendErrorResponse = require("../utils/errorHandler");
const sendSuccessResponse = require("../utils/successHandler");

// GET

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return sendSuccessResponse(res, 200, "success", { products }, products.length);
    } catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

// GET Params

const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }
        
        const product = await Product.findById(id);

        if (!product) {
            return sendErrorResponse(res, 404, "fail", "Product not found");
        }

        return sendSuccessResponse(res, 200, "success", { product });
    } catch (error) {
        console.error(error);

        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

// POST

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        return sendSuccessResponse(res, 201, "success", { product });
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

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }

        const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!product) {
            return sendErrorResponse(res, 404, "fail", "Product not found");
        }

        return sendSuccessResponse(res, 200, "success", { product });
    } catch (error) {
        console.error(error);

        if (error.name === "ValidationError") {
            return sendErrorResponse(res, 400, "fail", "Validation error", error.errors);
        }

        return sendErrorResponse(res, 500, "error", "Internal server error");
    }
};

// DELETE

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return sendErrorResponse(res, 404, "fail", "Product not found");
        }

        return sendSuccessResponse(res, 204, "success", null);
    } catch (error) {
        console.error(error);

        return sendErrorResponse(res, 500, "error", "Internal server error");
    }
};

module.exports = { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct };