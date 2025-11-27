const mongoose = require("mongoose");

// Connection function
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongooseDB");
    console.log("MongoDB Connected ✔");
  } catch (err) {
    console.log("DB Connection Failed ", err);
  }
};

module.exports = connectDB;