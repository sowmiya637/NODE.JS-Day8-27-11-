const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Routes
app.use("/api/students", studentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));