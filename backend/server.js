const express = require("express")
const cors = require("cors")

const app = express()

// MIDDLEWARE

app.use(cors())
app.use(express.json())


// HOME ROUTE

app.get("/", (req, res) => {

  res.send("Call Siren Backend Running")

})


// DRIVER SIGNUP API

app.post("/driver/signup", (req, res) => {

  try {

    const driverData = req.body

    console.log("Driver Signup Data:", driverData)

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


// DRIVER LOGIN API

app.post("/driver/login", (req, res) => {

  try {

    const loginData = req.body

    console.log("Driver Login Data:", loginData)

    res.json({
      success: true,
      message: "Driver Login Successful"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Server Error"
    })

  }

})


// USER EMERGENCY API

app.post("/emergency", (req, res) => {

  try {

    const emergencyData = req.body

    console.log("Emergency Request:", emergencyData)

    res.json({
      success: true,
      message: "Emergency Alert Sent Successfully"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Server Error"
    })

  }

})


// SERVER PORT

const PORT = 5000

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})