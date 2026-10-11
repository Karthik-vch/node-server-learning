
require("dotenv").config();

const app = require("./app");
const connectMongoose = require("./config/mongoose");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectMongoose();

        app.listen(PORT, () => {
            console.log(
                `${process.env.APP_NAME} running on port ${PORT}`
            );
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exitCode = 1;
    }
};

startServer();
