const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobileNum: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  password: {
    type: String,
    required: true,
  },
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema)

module.exports = EmployeeModel;