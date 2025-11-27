Mongoose ODM – CRUD API using Node.js + Express + MongoDB
This project demonstrates how to use Mongoose ODM (Object Data Modeling) to perform CRUD operations in MongoDB using a clean and structured Express.js server.

It includes:

✔ MongoDB connection using Mongoose
✔ Schema + Model creation
✔ CRUD API Routes
✔ Express server setup
✔ Organized MVC folder structure
📂 Project Structure
mongoose-crud/ │ ├── server.js ├── config.js │ ├── models/ │ └── studentModel.js │ └── routes/ └── studentRoutes.js

yaml Copy code

🛠️ Installation & Setup
1️⃣ Clone or Download the Project
git clone cd mongoose-crud

yaml Copy code

or create a new folder manually.

2️⃣ Install Dependencies
npm install

yaml Copy code

This installs:

express
mongoose
cors
3️⃣ Start MongoDB Server
If using MongoDB as a Windows service:

net start MongoDB

powershell Copy code

If using mongosh locally:

mongosh

yaml Copy code

4️⃣ Run the Server
node server.js

lua Copy code

Expected output:

MongoDB Connected ✔ Server running on port 5000

arduino Copy code

🔌 MongoDB Connection (Mongoose)
File: config.js

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongooseDB");
    console.log("MongoDB Connected ✔");
  } catch (err) {
    console.log("DB Connection Failed ❌", err);
  }
};

module.exports = connectDB;
🧩 Mongoose Schema & Model
File: models/studentModel.js

js
Copy code
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dept: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model("Student", studentSchema);
🛣️ API Routes (CRUD)
File: routes/studentRoutes.js

➕ Create Student (POST)
📥 Read Students (GET)
✏️ Update Student (PUT)
❌ Delete Student (DELETE)
js
Copy code
const express = require("express");
const Student = require("../models/studentModel");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  res.json(await Student.find());
});

router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  student ? res.json(student) : res.status(404).json({ message: "Not found" });
});

router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  student ? res.json(student) : res.status(404).json({ message: "Not found" });
});

router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  student ? res.json({ message: "Deleted" }) : res.status(404).json({ message: "Not found" });
});

module.exports = router;
🚀 Running the API
Base URL:
bash
Copy code
http://localhost:5000/api/students
🧪 Test Routes in Postman
1️⃣ Create Student (POST)
URL:

bash
Copy code
http://localhost:5000/api/students
Body (JSON):

json
Copy code
{
  "name": "Rithiha",
  "dept": "CSE",
  "age": 21
}
2️⃣ Get All Students (GET)
bash
Copy code
http://localhost:5000/api/students
3️⃣ Get Single Student (GET)
bash
Copy code
http://localhost:5000/api/students/<id>
4️⃣ Update Student (PUT)
bash
Copy code
http://localhost:5000/api/students/<id>
Body:

json
Copy code
{
  "age": 23
}
5️⃣ Delete Student (DELETE)
bash
Copy code
http://localhost:5000/api/students/<id>
🎯 Features
🔹 Clean folder structure

🔹 Simple & readable code

🔹 Mongoose validation

🔹 Fully working CRUD API

🔹 Beginner-friendly design
