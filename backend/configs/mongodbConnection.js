const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URI

const connectDB = async () => {
    try
    {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to Mongo DB");
    }
    catch (err)
    {
        console.log("Error connecting to MONGO DB:", err);
    }
}

module.exports = connectDB;