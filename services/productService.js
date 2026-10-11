
const Product = require("../models/Product");
const mongoose = require("mongoose");

// GET all products
const getAllProducts = async () => {
    return await Product.find();
};

// GET one product by ID
const getProductById = async (id) => {
    if (!mongoose.isValidObjectId(id)) {
        return null;
    }

    return await Product.findById(id);
};

// CREATE a product
const createProduct = async (name, price, category) => {
    return await Product.create({
        name,
        price,
        category
    });
};

// PUT: update all fields
const updateProduct = async (id, name, price, category) => {
    if (!mongoose.isValidObjectId(id)) {
        return null;
    }

    return await Product.findByIdAndUpdate(
        id,
        { name, price, category },
        {
            returnDocument: "after",
            runValidators: true
        }
    );
};

// PATCH: update selected fields
const updateProductPartially = async (id, name, price, category) => {
    if (!mongoose.isValidObjectId(id)) {
        return null;
    }

    const updates = {};

    if (name !== undefined) updates.name = name;
    if (price !== undefined) updates.price = price;
    if (category !== undefined) updates.category = category;

    if (Object.keys(updates).length === 0) {
        return null;
    }

    return await Product.findByIdAndUpdate(
        id,
        { $set: updates },
        {
            returnDocument: "after",
            runValidators: true
        }
    );
};

// DELETE a product
const deleteProduct = async (id) => {
    if (!mongoose.isValidObjectId(id)) {
        return null;
    }

    return await Product.findByIdAndDelete(id);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    updateProductPartially,
    deleteProduct
};
