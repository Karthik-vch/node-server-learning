
const express = require("express");

const app = express();

// 1. Import middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// 2. Import routes
const productRoutes = require("./routes/productRoutes");

// 3. Global middleware
app.use(express.json());
app.use(logger);

// 4. Register routes
app.use("/products", productRoutes);

// 5. Default route
app.get("/", (req, res) => {
    res.json({
        message: "Product API is running"
    });
});

// 6. Global error handler — MUST be after routes
app.use(errorHandler);

// 7. Export app
module.exports = app;
