⚡ MongoDB Indexing Basics — Node.js + Express + Mongoose
This project demonstrates how to use MongoDB Indexing with Mongoose to dramatically improve query performance.
Includes real-world examples of:

✔ Single-field Index
✔ Unique Index
✔ Compound Index
✔ Text Index (full-text search)
✔ Fast search queries using indexed fields

Perfect for learning how MongoDB optimizes performance and how to apply indexing in Node.js applications.

📁 Project Structure
indexing-demo/ │── server.js │── package.json │── models/ │ └── user.model.js │── routes/ │ └── user.routes.js │── README.md

yaml Copy code

🚀 Features
✔ Single-Field Index
city: { type: String, index: true }
✔ Unique Index
js
Copy code
email: { type: String, unique: true }
✔ Compound Index
js
Copy code
userSchema.index({ age: 1, city: -1 });
✔ Full-Text Search (Text Index)
js
Copy code
userSchema.index({ name: "text", city: "text" });
✔ Querying Indexed Fields
Search by email

Filter by city

Keyword search using text index

These examples help understand how indexing improves query execution time.

🛠 Installation & Setup
1️⃣ Install Dependencies
bash
Copy code
npm install
2️⃣ Start MongoDB
Windows PowerShell:

powershell
Copy code
Start-Service MongoDB
3️⃣ Start the Server
bash
Copy code
npm start
📡 API Routes
➤ Create User
POST /api/users

Create a new user to test indexing behavior.

➤ Search by Indexed Fields
Query Type	Example
email	/api/users/search?email=john@example.com
city	/api/users/search?city=Chennai
text search	/api/users/search?q=john

These routes demonstrate how indexes speed up searching.

📘 Why Indexing?
Indexes help MongoDB:

⚡ Find documents much faster

🚫 Avoid full collection scans

🔍 Speed up complex searches

🧭 Improve text-search accuracy

🔐 Enforce uniqueness (e.g., unique email)

Without indexing, MongoDB would need to scan every document — which becomes slow as the collection grows.

🎯 Learning Outcomes
By completing this project, you will understand:

When to use indexes

Different types of MongoDB indexes

How indexes improve performance

How to create indexes using Mongoose

How MongoDB executes queries using indexes

How to verify indexes using:

bash
Copy code
db.users.getIndexes()
📜 License
This project is free for educational & academic use.
