// Tracking.jsx

import { useEffect, useState } from "react"

function Tracking() {

  const [accepted, setAccepted] = useState(false)

  const driver = localStorage.getItem("acceptedDriver")
  const ambulance = localStorage.getItem("acceptedAmbulance")
  const driverPhone = localStorage.getItem("driverPhone")

  const location = localStorage.getItem("userLocation")
  const emergency = localStorage.getItem("userEmergency")

  useEffect(() => {

    if (driver && ambulance) {
      setAccepted(true)
    }

  }, [driver, ambulance])

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center p-10">

      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        Live Tracking
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">

        <p className="mb-4 text-lg">
          Emergency Location: {location}
        </p>

        <p className="mb-4 text-lg">
          Emergency Type: {emergency}
        </p>

        {accepted ? (

          <div>

            <p className="mb-4 text-lg">
              Driver Name: {driver}
            </p>

            <p className="mb-4 text-lg">
              Driver Phone: {driverPhone}
            </p>

            <p className="mb-4 text-lg">
              Ambulance Number: {ambulance}
            </p>

            <div className="bg-gray-200 h-64 rounded-xl flex justify-center items-center mb-4">
              Ambulance Live Location Map
            </div>

            <p className="mb-4 text-green-600 font-semibold text-lg">
              Ambulance On The Way
            </p>

            <p className="text-lg">
              ETA: 5 Minutes
            </p>

          </div>

        ) : (

          <div>

            <p className="text-yellow-600 text-lg font-semibold">
              Waiting For Ambulance Driver To Accept Request...
            </p>

          </div>

        )}

      </div>

    </div>
  )
}

export default Tracking