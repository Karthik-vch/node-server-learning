
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        minLength: [2, "Product name must be at least 2 characters"],
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },

    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Product price cannot be negative"]
    },

    category: {
        type: String,
        required: [true, "Product category is required"],
        trim: true,
        minLength: [2, "Category must be at least 2 characters"]
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
