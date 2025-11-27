const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

// Create User
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Search by Indexed Fields
router.get("/search", async (req, res) => {
  const { email, city, q } = req.query;

  let filter = {};

  if (email) filter.email = email;

  if (city) filter.city = city;

  // Full text search
  if (q) filter.$text = { $search: q };

  const users = await User.find(filter);
  res.json(users);
});

module.exports = router;