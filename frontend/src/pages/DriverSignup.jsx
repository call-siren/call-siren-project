import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

function DriverSignup() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [ambulance, setAmbulance] = useState("")

  const navigate = useNavigate()

  const handleSignup = async () => {

    try {

      const driverData = {
        name,
        phone,
        password,
        ambulance,
        status: "active"
      }

      // Save to Firebase Firestore
      await addDoc(collection(db, "drivers"), driverData)

      // Optional local storage
      localStorage.setItem(
        "registeredDriver",
        JSON.stringify(driverData)
      )

      alert("Driver Registered Successfully")

      navigate("/driver-login")

    } catch (error) {

      console.log(error)
      alert("Error registering driver")

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">

      <h1 className="text-5xl font-bold text-red-600 mb-8">
        Driver Sign Up
      </h1>

      <input
        type="text"
        placeholder="Driver Name"
        className="border p-4 rounded-xl w-80 mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="border p-4 rounded-xl w-80 mb-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-4 rounded-xl w-80 mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ambulance Number"
        className="border p-4 rounded-xl w-80 mb-6"
        value={ambulance}
        onChange={(e) => setAmbulance(e.target.value)}
      />

      <button
        onClick={handleSignup}
        className="bg-red-600 text-white px-8 py-4 rounded-xl w-80"
      >
        Sign Up
      </button>

    </div>
  )
}

export default DriverSignup