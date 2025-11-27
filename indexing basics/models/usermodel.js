const mongoose = require("mongoose");

// Create Schema
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, index: true },   // 🔥 Important index
  age: { type: Number },
  city: { type: String, index: true },                 // Normal index
});

// Compound index (search by age + city)
userSchema.index({ age: 1, city: -1 });

// Text index
userSchema.index({ name: "text", city: "text" });

module.exports = mongoose.model("User", userSchema);