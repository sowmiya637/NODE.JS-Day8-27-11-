const mongoose = require("mongoose");

// Schema defines structure
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dept: { type: String, required: true },
  age: { type: Number, required: true }
});

// Model creates collection
module.exports = mongoose.model("Student", studentSchema);