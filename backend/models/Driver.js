const mongoose = require("mongoose")

const DriverSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  ambulance: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "active"
  }

})

module.exports = mongoose.model("Driver", DriverSchema)