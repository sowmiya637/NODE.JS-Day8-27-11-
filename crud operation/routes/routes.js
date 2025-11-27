const express = require("express");
const User = require("../models/userModel");
const router = express.Router();


// CREATE USER
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ ALL USERS
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ SINGLE USER
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  user ? res.json({ message: "User deleted" }) : res.status(404).json({ message: "User not found" });
});

module.exports = router;