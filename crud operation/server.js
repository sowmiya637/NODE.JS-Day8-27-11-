const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// API Routes
app.use("/api/users", userRoutes);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));