const mongoose = require("mongoose");
require('dotenv').config();

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to DB: ${mongoose.connection.host}`);
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
};

module.exports = connectToDB;
