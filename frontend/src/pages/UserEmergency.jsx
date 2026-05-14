// UserEmergency.jsx

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function UserEmergency() {

  const [location, setLocation] = useState("")
  const [emergency, setEmergency] = useState("")

  const navigate = useNavigate()

  const sendAlert = () => {

    // Clear previous accepted ambulance data
    localStorage.removeItem("acceptedDriver")
    localStorage.removeItem("acceptedAmbulance")

    // Store new emergency data
    localStorage.setItem("userLocation", location)
    localStorage.setItem("userEmergency", emergency)

    navigate("/tracking")
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50">

      <h1 className="text-5xl font-bold text-red-600 mb-8">
        Emergency Details
      </h1>

      <input
        type="text"
        placeholder="Enter Emergency Location"
        className="border p-4 rounded-xl w-80 mb-4"
        onChange={(e) => setLocation(e.target.value)}
      />

      <textarea
        placeholder="Describe Emergency"
        className="border p-4 rounded-xl w-80 mb-6"
        onChange={(e) => setEmergency(e.target.value)}
      />

      <button
        onClick={sendAlert}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl w-80"
      >
        Send Emergency Alert
      </button>

    </div>
  )
}

export default UserEmergency