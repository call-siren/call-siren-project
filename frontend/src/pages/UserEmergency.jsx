// UserEmergency.jsx

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function UserEmergency() {

  const [location, setLocation] = useState("")
  const [emergency, setEmergency] = useState("")

  const navigate = useNavigate()

  // USER LIVE LOCATION

  useEffect(() => {

    navigator.geolocation.watchPosition(

      (position) => {

        const lat = position.coords.latitude
        const lng = position.coords.longitude

        localStorage.setItem("userLat", lat)
        localStorage.setItem("userLng", lng)

      },

      (error) => {

        console.log(error)

      },

      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      }

    )

  }, [])

  const sendAlert = () => {

    // Clear previous accepted ambulance data

    localStorage.removeItem("acceptedDriver")
    localStorage.removeItem("acceptedAmbulance")

    localStorage.removeItem("completedEmergency")

    // Store new emergency data

    localStorage.setItem("userLocation", location)
    localStorage.setItem("userEmergency", emergency)

    navigate("/tracking")
  }

  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 p-6">

      <h1 className="text-5xl font-bold text-red-600 mb-8">
        Emergency Details
      </h1>

      <input
        type="text"
        placeholder="Enter Emergency Location"
        className="border p-4 rounded-xl w-80 mb-4"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <textarea
        placeholder="Describe Emergency"
        className="border p-4 rounded-xl w-80 mb-6"
        rows="4"
        value={emergency}
        onChange={(e) => setEmergency(e.target.value)}
      />

      <button
        onClick={sendAlert}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl w-80 font-semibold"
      >
        Send Emergency Alert
      </button>

    </div>

  )
}

export default UserEmergency