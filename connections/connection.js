const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("MongoDB Connected");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
