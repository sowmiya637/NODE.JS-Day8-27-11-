MongoDB Aggregation Pipeline — Node.js + Express + Mongoose
This project demonstrates MongoDB Aggregation Pipeline using Node.js, Express, and Mongoose.
It includes real-world analytics APIs such as:

✔ Total spending per customer
✔ Group orders by city
✔ Find top spending customers
✔ $lookup, $group, $project, $sort, $unwind, $limit examples
✔ Sample seed data for instant testing

📁 Project Structure
aggregation-pipeline-demo/ │── server.js │── package.json │── README.md │── models/ │ ├── customer.model.js │ ├── order.model.js │── routes/ │ ├── report.routes.js │ ├── seed.routes.js

yaml Copy code

🛠 Tech Stack
Tool	Purpose
Node.js	Backend runtime
Express.js	REST API server
MongoDB	Database
Mongoose	ODM + Aggregations
Aggregation Pipeline	Data analytics & calculations
🚀 Setup Instructions
1️⃣ Install Dependencies
npm install
If starting fresh:

bash
Copy code
npm init -y
npm install express mongoose
2️⃣ Ensure MongoDB Is Running
✔ Windows (Services Panel)
Press Start

Search Services

Find MongoDB Server

Right-click → Start

✔ Or via PowerShell
powershell
Copy code
Start-Service MongoDB
3️⃣ Start the Server
bash
Copy code
node server.js
Expected Output:

arduino
Copy code
MongoDB Connected
Server running on port 3000
🚀 API Routes
🔵 Seed Sample Data
Used to insert customers + orders into MongoDB.

Method	Endpoint	Description
POST	/seed	Insert sample customer + order documents

🟢 Aggregation Report Routes
Method	Endpoint	Description
GET	/report/total-spending	Total amount spent by each customer
GET	/report/orders-by-city	Group orders by customer city
GET	/report/top-customers	Top 2 spending customers
GET	/report/customer-orders	Join customers + orders using $lookup

📘 Aggregation Stages Used
Stage	Purpose
$match	Filter documents
$group	Group + calculate totals
$lookup	Join collections
$project	Select fields / computed fields
$sort	Sort results
$unwind	Expand array fields
$limit	Limit number of documents

📂 Models Overview
👤 Customer Model (customer.model.js)
Stores customer data:

name

age

city

📦 Order Model (order.model.js)
Stores each order:

customerId (reference to customer)

product

price

quantity

date

🧪 Sample API Outputs
✔ Total Spending Per Customer
GET /report/total-spending

json
Copy code
[
  {
    "customerName": "John",
    "totalSpent": 63000,
    "totalOrders": 2
  }
]
✔ Orders Grouped By City
GET /report/orders-by-city

json
Copy code
[
  { "_id": "Chennai", "orderCount": 3 },
  { "_id": "Bangalore", "orderCount": 1 }
]
✔ Top 2 Customers
GET /report/top-customers

json
Copy code
[
  { "customerName": "John", "totalSpent": 63000 },
  { "customerName": "Alex", "totalSpent": 14500 }
]
🎯 Learning Outcomes
By building this project, you will learn:

How the MongoDB Aggregation Pipeline works

How to join collections using $lookup

How to compute totals with $group

How to create reporting & analytics APIs

How to build the logic for real-world dashboards

📜 License
This project is free to use for learning, practice, and academic purposes.
