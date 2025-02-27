const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee.js')
require("dotenv").config();
const db = require("./db");
const bcrypt = require("bcrypt");

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

console.log("MongoDB URL:", process.env.MONGODB_URL_LOCAL);

app.post("/login", async (req, res) => {
  try {
    const user = await EmployeeModel.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: "No record existed" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Incorrect password" });

    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/register", async (req, res) => {
  console.log("Received data:", req.body); // Debug incoming request
  try {
    const { name, email, mobileNum, password } = req.body;

    //1. Validate input fields
    if (!name || !email || !mobileNum || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 2. check if the email already exist
    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // 3. Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await EmployeeModel.create({
      name,
      email,
      mobileNum,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ message: "User registered successfully", user: employee }); // Send response once
  } catch (error) {
      console.error("Error creating employee:", error.message); // Log the error
      console.log(error)
    res.status(500).json({ error: "Internal Server Error" }); // Send error response
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})