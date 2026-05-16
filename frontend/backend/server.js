const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const Driver = require("./models/Driver")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(
  "mongodb+srv://dheepand831_db_user:dheepan123@callsiren.nrsiqpr.mongodb.net/DHEEPAN07?retryWrites=true&w=majority&appName=CALLSIREN"
)

.then(() => {
  console.log("MongoDB Connected")
})

.catch((error) => {
  console.log(error)
})

app.get("/", (req, res) => {
  res.send("Call Siren Backend Running")
})


// DRIVER SIGNUP API

app.post("/driver/signup", async (req, res) => {

  try {

    const { name, phone, password, ambulance } = req.body

    const newDriver = new Driver({
      name,
      phone,
      password,
      ambulance
    })

    await newDriver.save()

    res.json({
      success: true,
      message: "Driver Registered Successfully"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Server Error"
    })

  }

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})