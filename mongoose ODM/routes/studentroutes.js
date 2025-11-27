const express = require("express");
const Student = require("../models/studentModel");
const router = express.Router();

// CREATE student
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all students
router.get("/", async (req, res) => {
  res.json(await Student.find());
});

// READ single student
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  student ? res.json(student) : res.status(404).json({ message: "Not found" });
});

// UPDATE student
router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  student ? res.json(student) : res.status(404).json({ message: "Not found" });
});

// DELETE student
router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  student ? res.json({ message: "Deleted" }) : res.status(404).json({ message: "Not found" });
});

module.exports = router;