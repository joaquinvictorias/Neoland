const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MOGO_URI);
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectDB;