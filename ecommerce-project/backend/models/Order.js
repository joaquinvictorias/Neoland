const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        products: [
            {
                product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
                quantity: { type: Number, required: true },
                size: { type: String, default: "M", enum: ["XS", "S", "M", "L", "XL"], required: true }
            }
        ],
        totalPrice: { type: Number, required: true },
        status: { type: String, default: "Pending", enum: ["Pending", "Shipped", "Delivered"], required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        street: { type: String, required: true },
        postalCode: { type: String, required: true },
        city: { type: String, required: true },
        phone: { type: String, required: true }
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;