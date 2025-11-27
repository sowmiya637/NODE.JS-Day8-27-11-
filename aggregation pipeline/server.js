const express = require("express");
const mongoose = require("mongoose");

const Customer = require("./models/customer.model");
const Order = require("./models/order.model");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/aggregation_demo")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// -------------------
//  Insert Sample Data
// -------------------
app.post("/seed", async (req, res) => {
  await Customer.deleteMany({});
  await Order.deleteMany({});

  const customers = await Customer.insertMany([
    { name: "John", age: 30, city: "Chennai" },
    { name: "Priya", age: 25, city: "Bangalore" },
    { name: "Alex", age: 35, city: "Chennai" }
  ]);

  await Order.insertMany([
    { customerId: customers[0]._id, product: "Laptop", quantity: 1, price: 60000 },
    { customerId: customers[0]._id, product: "Mouse", quantity: 2, price: 1500 },
    { customerId: customers[1]._id, product: "Phone", quantity: 1, price: 30000 },
    { customerId: customers[2]._id, product: "Keyboard", quantity: 1, price: 2500 },
    { customerId: customers[2]._id, product: "Monitor", quantity: 1, price: 12000 }
  ]);

  res.json({ message: "Sample data added" });
});


// ----------------------------------------------------------
// 1️⃣ Aggregation Example: Total spending by each customer
// ----------------------------------------------------------
app.get("/report/total-spending", async (req, res) => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: "$customerId",
        totalSpent: { $sum: { $multiply: ["$quantity", "$price"] } },
        totalOrders: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "customers",
        localField: "_id",
        foreignField: "_id",
        as: "customer"
      }
    },
    { $unwind: "$customer" },
    {
      $project: {
        _id: 0,
        customerName: "$customer.name",
        totalSpent: 1,
        totalOrders: 1
      }
    }
  ]);

  res.json(result);
});


// -------------------------------------------------------------
// 2️⃣ Aggregation Example: Orders Count by City
// -------------------------------------------------------------
app.get("/report/orders-by-city", async (req, res) => {
  const result = await Order.aggregate([
    {
      $lookup: {
        from: "customers",
        localField: "customerId",
        foreignField: "_id",
        as: "customer"
      }
    },
    { $unwind: "$customer" },
    {
      $group: {
        _id: "$customer.city",
        orderCount: { $sum: 1 }
      }
    }
  ]);

  res.json(result);
});


// -------------------------------------------------------------
// 3️⃣ Aggregation Example: Top 2 Customers by Spending
// -------------------------------------------------------------
app.get("/report/top-customers", async (req, res) => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: "$customerId",
        totalSpent: { $sum: { $multiply: ["$price", "$quantity"] } }
      }
    },
    { $sort: { totalSpent: -1 } },
    { $limit: 2 },
    {
      $lookup: {
        from: "customers",
        localField: "_id",
        foreignField: "_id",
        as: "customer"
      }
    },
    { $unwind: "$customer" },
    {
      $project: {
        _id: 0,
        customerName: "$customer.name",
        totalSpent: 1
      }
    }
  ]);

  res.json(result);
});



// Server
app.listen(3000, () => console.log("Server running on port 3000"));