// DriverDashboard.jsx

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import MapComponent from "../components/MapComponent"

function DriverDashboard() {

  const navigate = useNavigate()

  const driverName =
    localStorage.getItem("driverName")

  const ambulanceNumber =
    localStorage.getItem("ambulanceNumber")

  const userName =
    localStorage.getItem("userName")

  const userPhone =
    localStorage.getItem("userPhone")

  const userLocation =
    localStorage.getItem("userLocation")

  const userEmergency =
    localStorage.getItem("userEmergency")

  const accepted =
    localStorage.getItem("acceptedDriver")

  // DRIVER LIVE LOCATION

  useEffect(() => {

    navigator.geolocation.watchPosition(

      (position) => {

        const lat = position.coords.latitude
        const lng = position.coords.longitude

        localStorage.setItem("driverLat", lat)
        localStorage.setItem("driverLng", lng)

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

  const hasRequest =
    userLocation && userEmergency

  // ACCEPT EMERGENCY

  const acceptEmergency = () => {

    localStorage.setItem(
      "acceptedDriver",
      driverName
    )

    localStorage.setItem(
      "acceptedAmbulance",
      ambulanceNumber
    )

    localStorage.setItem(
      "driverPhone",
      localStorage.getItem("driverPhone")
    )

    navigate("/driver-dashboard")

  }

  // REJECT EMERGENCY

  const clearOldRequest = () => {

    localStorage.removeItem("userName")
    localStorage.removeItem("userPhone")
    localStorage.removeItem("userLocation")
    localStorage.removeItem("userEmergency")

    localStorage.removeItem("acceptedDriver")
    localStorage.removeItem("acceptedAmbulance")

    window.location.reload()

  }

  // COMPLETE EMERGENCY

  const completeEmergency = () => {

    localStorage.setItem(
      "completedEmergency",
      "true"
    )

    localStorage.removeItem("userName")
    localStorage.removeItem("userPhone")
    localStorage.removeItem("userLocation")
    localStorage.removeItem("userEmergency")

    localStorage.removeItem("acceptedDriver")
    localStorage.removeItem("acceptedAmbulance")

    alert("Emergency Completed Successfully")

    window.location.reload()

  }

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-10">

      <h1 className="text-5xl font-bold text-red-600 mb-4">
        Driver Dashboard
      </h1>

      <p className="mb-2 text-xl">
        Driver: {driverName}
      </p>

      <p className="mb-8 text-xl">
        Ambulance: {ambulanceNumber}
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg w-[500px]">

        {!hasRequest ? (

          <div className="text-center">

            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              Waiting For Emergency Requests
            </h2>

            <p className="text-gray-600">
              No emergency alerts available currently.
            </p>

          </div>

        ) : !accepted ? (

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Emergency Alert
            </h2>

            <p className="mb-2">
              User Name: {userName}
            </p>

            <p className="mb-2">
              Phone: {userPhone}
            </p>

            <p className="mb-2">
              Location: {userLocation}
            </p>

            <p className="mb-2">
              Emergency: {userEmergency}
            </p>

            <p className="mb-6">
              Distance: 1.8 KM
            </p>

            <div className="flex gap-4">

              <button
                onClick={acceptEmergency}
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
              >
                Accept
              </button>

              <button
                onClick={clearOldRequest}
                className="bg-red-600 text-white px-6 py-2 rounded-lg"
              >
                Reject
              </button>

            </div>

          </div>

        ) : (

          <div>

            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Emergency Accepted
            </h2>

            <p className="mb-2">
              Patient: {userName}
            </p>

            <p className="mb-2">
              Phone: {userPhone}
            </p>

            <p className="mb-4">
              Location: {userLocation}
            </p>

            {/* LIVE MAP */}

            <div className="mb-4">
              <MapComponent />
            </div>

            <div className="flex flex-col gap-4">

              <p className="text-green-600 font-semibold">
                Navigate To Emergency Location
              </p>

              <button
                onClick={completeEmergency}
                className="bg-blue-600 text-white py-3 rounded-xl font-semibold"
              >
                Complete Emergency
              </button>

            </div>

          </div>

        )}

      </div>

    </div>

  )
}

export default DriverDashboard