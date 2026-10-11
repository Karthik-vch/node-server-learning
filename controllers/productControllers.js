
const productService = require("../services/productService");

// GET /products — Get all products
const getProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        next(error);
    }
};

// GET /products/:id — Get one product
const getProductById = async (req, res, next) => {
    try {
        const product = await productService.getProductById(
            req.params.id
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        next(error);
    }
};

// POST /products — Create a product
const createProduct = async (req, res, next) => {
    try {
        const { name, price, category } = req.body;

        const product = await productService.createProduct(
            name,
            price,
            category
        );

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });
    } catch (error) {
        next(error);
    }
};

// PUT /products/:id — Replace product fields
const updateProduct = async (req, res, next) => {
    try {
        const { name, price, category } = req.body;

        const product = await productService.updateProduct(
            req.params.id,
            name,
            price,
            category
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found or invalid ID"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });
    } catch (error) {
        next(error);
    }
};

// PATCH /products/:id — Update selected fields
const updateProductPartially = async (req, res, next) => {
    try {
        const { name, price, category } = req.body;

        const product = await productService.updateProductPartially(
            req.params.id,
            name,
            price,
            category
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found, invalid ID, or no valid fields supplied"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });
    } catch (error) {
        next(error);
    }
};

// DELETE /products/:id — Delete a product
const deleteProduct = async (req, res, next) => {
    try {
        const product = await productService.deleteProduct(
            req.params.id
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found or invalid ID"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    updateProductPartially,
    deleteProduct
};
