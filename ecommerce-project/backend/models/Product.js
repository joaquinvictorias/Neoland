const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: false, unique: true },
        category: { type: String, default: "unisex", enum: ["masculina", "femenina", "unisex"], required: true },
        color: { type: String, required: true },
        description: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true }
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;