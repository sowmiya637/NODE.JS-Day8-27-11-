🚀 Node.js CRUD API (Express + MongoDB + Mongoose)
A simple and clean CRUD (Create, Read, Update, Delete) REST API built using:

Node.js
Express.js
MongoDB
Mongoose ODM
CORS Middleware
This project is beginner-friendly and demonstrates how to build a complete API from scratch using MongoDB as the database.

📂 Project Structure
node-crud/ │ ├── server.js ├── config.js │ ├── models/ │ └── userModel.js │ └── routes/ └── userRoutes.js

yaml Copy code

⚙️ Installation & Setup Instructions
1. Clone or Download the Project
git clone cd node-crud

markdown Copy code

2. Install Dependencies
npm install

csharp Copy code

3. Start MongoDB
If MongoDB is installed as a Windows service:

net start MongoDB

powershell Copy code

Or start manually using mongosh:

mongosh

markdown Copy code

4. Start the Server
node server.js

yaml Copy code

You should see: MongoDB Connected ✔ Server running on port 5000

yaml Copy code

🛠️ API Endpoints (CRUD)
Base URL:

http://localhost:5000/api/users

yaml Copy code

▶️ 1. Create User
POST /api/users

Request Body

{
  "name": "John",
  "email": "john@example.com",
  "age": 25
}
▶️ 2. Get All Users
GET /api/users

▶️ 3. Get a Single User
GET /api/users/:id

▶️ 4. Update User
PUT /api/users/:id

Request Body

json
Copy code
{
  "name": "Updated Name"
}
▶️ 5. Delete User
DELETE /api/users/:id

📁 Code Overview
🧩 MongoDB Connection – config.js
js
Copy code
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cruddb");
    console.log("MongoDB Connected ✔");
  } catch (error) {
    console.error("Connection Failed ❌", error);
  }
};

module.exports = connectDB;
🧩 User Schema – userModel.js
js
Copy code
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model("User", userSchema);
🧩 Routes – userRoutes.js
js
Copy code
const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try { res.json(await User.create(req.body)); }
  catch (err) { res.status(400).json({ error: err.message }); }
});

// READ ALL
router.get("/", async (req, res) => {
  res.json(await User.find());
});

// READ SINGLE
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "Not found" });
});

// UPDATE
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  user ? res.json(user) : res.status(404).json({ message: "Not found" });
});

// DELETE
router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  user ? res.json({ message: "Deleted" }) : res.status(404).json({ message: "Not found" });
});

module.exports = router;
🧩 Main Server – server.js
js
Copy code
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

// Routes
app.use("/api/users", userRoutes);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
✔️ Features
Full CRUD functionality

Proper routing structure

MongoDB & Mongoose integration

Modular and clean code

Error handling

JSON-based API

Cross-Origin support (CORS)

📌 Requirements
Node.js (v14+)

MongoDB (running locally)

Postman / Thunder Client for API testing
