const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB);
        console.log("MongoDB connected")
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;