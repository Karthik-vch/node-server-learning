
const validateProduct = (req, res, next) => {
    const { name, price, category } = req.body;

    // Validate product name
    if (
        typeof name !== "string" ||
        name.trim().length < 2
    ) {
        return res.status(400).json({
            success: false,
            message: "Product name must contain at least 2 characters"
        });
    }

    // Validate product price
    if (
        typeof price !== "number" ||
        !Number.isFinite(price) ||
        price <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Price must be a positive number"
        });
    }

    // Validate product category
    if (
        typeof category !== "string" ||
        category.trim().length < 2
    ) {
        return res.status(400).json({
            success: false,
            message: "Product category must contain at least 2 characters"
        });
    }

    next();
};

module.exports = validateProduct;
