
const mongoose = require("mongoose");

const connectMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Mongoose connected successfully!");
    } catch (error) {
        console.error("Mongoose connection failed:", error.message);
        throw error;
    }
};

module.exports = connectMongoose;
