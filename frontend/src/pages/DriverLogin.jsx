import { useState } from "react"
import { useNavigate } from "react-router-dom"

function DriverLogin() {

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const registeredDriver = JSON.parse(
    localStorage.getItem("registeredDriver")
  )

  const handleLogin = () => {

    if (
      registeredDriver &&
      phone === registeredDriver.phone &&
      password === registeredDriver.password
    ) {

      localStorage.setItem(
        "driverName",
        registeredDriver.name
      )

      localStorage.setItem(
        "ambulanceNumber",
        registeredDriver.ambulance
      )

      localStorage.setItem(
        "driverPhone",
        registeredDriver.phone
      )

      navigate("/driver-dashboard")

    } else {

      setError("Invalid Phone Number or Password")

    }

  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">

      <h1 className="text-5xl font-bold text-red-600 mb-8">
        Driver Login
      </h1>

      <input
        type="text"
        placeholder="Phone Number"
        className="border p-4 rounded-xl w-80 mb-4"
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-4 rounded-xl w-80 mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (

        <p className="text-red-600 mb-4">
          {error}
        </p>

      )}

      <button
        onClick={handleLogin}
        className="bg-red-600 text-white px-8 py-4 rounded-xl w-80"
      >
        Login
      </button>

    </div>
  )
}

export default DriverLogin