const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const mongoose = require("mongoose");
const sendErrorResponse = require("../utils/errorHandler");
const sendSuccessResponse = require("../utils/successHandler");

// GET

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        return sendSuccessResponse(res, 200, "success", { orders }, orders.length);
    } catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

// GET Params

const getOneOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }

        const order = await Order.findById(id).populate("products.product");

        if (!order) {
            return sendErrorResponse(res, 404, "fail", "Order not found");
        }

        return sendSuccessResponse(res, 200, "success", { order });
    } catch (error) {
        console.error(error);

        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};


// POST

const createOrder = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { user, products, status } = req.body;

        if (!mongoose.isValidObjectId(user)) {
            return sendErrorResponse(res, 400, "fail", "Invalid user ID");
        }
        
        const existingUser = await User.findById(user);

        if (!existingUser) {
            return sendErrorResponse(res, 404, "fail", "User not found");
        }

        let totalPrice = 0;

        for (const item of products) {
            if (!mongoose.isValidObjectId(item.product)) {
                return sendErrorResponse(res, 400, "fail", "Invalid product ID");
            }
            
            const product = await Product.findById(item.product).session(session);

            if (!product) {
                return sendErrorResponse(res, 404, "fail", "Product not found");
            }

            if (item.quantity > product.stock) {
                return sendErrorResponse(res, 400, "fail", "Insufficient stock");
            }

            totalPrice += product.price * item.quantity;
            product.stock -= item.quantity;
            await product.save({ session });
        }

        const order = await Order.create([{ user, products, totalPrice, status }], { session });

        await session.commitTransaction();
        session.endSession();

        return sendSuccessResponse(res, 201, "success", { order });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();

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

// PUT

const updateOrder = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { user, products, status } = req.body;
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }

        const order = await Order.findById(id).session(session);

        if (!order) {
            return sendErrorResponse(res, 404, "fail", "Order not found");
        }

        if (!mongoose.isValidObjectId(user)) {
            return sendErrorResponse(res, 400, "fail", "Invalid user ID");
        }

        const existingUser = await User.findById(user).session(session);

        if (!existingUser) {
            return sendErrorResponse(res, 404, "fail", "User not found");
        }

        for (const item of order.products) {
            if (!mongoose.isValidObjectId(item.product)) {
                return sendErrorResponse(res, 400, "fail", "Invalid product ID");
            }
            
            const product = await Product.findById(item.product).session(session);

            if (!product) {
                return sendErrorResponse(res, 404, "fail", "Product not found");
            }

            product.stock += item.quantity;
            await product.save({ session });
        }

        let totalPrice = 0;

        for (const item of products) {
            const product = await Product.findById(item.product).session(session);

            if (!product) {
                return sendErrorResponse(res, 404, "fail", "Product not found");
            }

            if (item.quantity > product.stock) {
                return sendErrorResponse(res, 400, "fail", "Insufficient stock");
            }

            totalPrice += product.price * item.quantity;
            product.stock -= item.quantity;
            await product.save();
        }

        order.products = products;
        order.totalPrice = totalPrice;
        order.user = user;
        order.status = status;

        await order.save({ session });

        await session.commitTransaction();
        session.endSession();

        return sendSuccessResponse(res, 200, "success", { order });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        
        console.error(error);

        if (error.name === "ValidationError") {
            return sendErrorResponse(res, 400, "fail", "Validation error", error.errors);
        }

        return sendErrorResponse(res, 500, "error", "Internal server error", error.message);
    }
};

// DELETE

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return sendErrorResponse(res, 400, "fail", "Invalid ID format");
        }

        const order = await Order.findById(id);

        if (!order) {
            return sendErrorResponse(res, 404, "fail", "Order not found");
        }

        for (const item of order.products) {
            const product = await Product.findById(item.product);

            if (!product) {
                return sendErrorResponse(res, 404, "fail", "Product not found");
            }

            product.stock += item.quantity;
            await product.save();
        }

        await Order.findByIdAndDelete(id);

        return sendSuccessResponse(res, 204, "success", null);
    } catch (error) {
        console.error(error);

        return sendErrorResponse(res, 500, "error", "Internal server error");
    }
};

module.exports = { getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder };