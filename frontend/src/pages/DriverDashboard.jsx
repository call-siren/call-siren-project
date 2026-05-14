import { useNavigate } from "react-router-dom"

function DriverDashboard() {

  const navigate = useNavigate()

  const driverName = localStorage.getItem("driverName")
  const ambulanceNumber = localStorage.getItem("ambulanceNumber")

  const userName = localStorage.getItem("userName")
  const userPhone = localStorage.getItem("userPhone")
  const userLocation = localStorage.getItem("userLocation")
  const userEmergency = localStorage.getItem("userEmergency")

  const accepted = localStorage.getItem("acceptedDriver")

  const hasRequest =
    userLocation && userEmergency

  const acceptEmergency = () => {

    localStorage.setItem("acceptedDriver", driverName)
    localStorage.setItem("acceptedAmbulance", ambulanceNumber)

    navigate("/driver-dashboard")
  }

  const clearOldRequest = () => {

    localStorage.removeItem("userName")
    localStorage.removeItem("userPhone")
    localStorage.removeItem("userLocation")
    localStorage.removeItem("userEmergency")

    localStorage.removeItem("acceptedDriver")
    localStorage.removeItem("acceptedAmbulance")

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

            <div className="bg-gray-200 h-64 rounded-xl flex justify-center items-center mb-4">
              User Location Map
            </div>

            <p className="text-green-600 font-semibold">
              Navigate To Emergency Location
            </p>

          </div>

        )}

      </div>

    </div>
  )
}

export default DriverDashboard