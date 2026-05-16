import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore"

import { db } from "../firebase"

function DriverLogin() {

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {

    try {

      const q = query(
        collection(db, "drivers"),
        where("phone", "==", phone),
        where("password", "==", password)
      )

      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {

        const driverData = querySnapshot.docs[0].data()

        localStorage.setItem(
          "driverName",
          driverData.name
        )

        localStorage.setItem(
          "ambulanceNumber",
          driverData.ambulance
        )

        localStorage.setItem(
          "driverPhone",
          driverData.phone
        )

        navigate("/driver-dashboard")

      } else {

        setError("Invalid Phone Number or Password")

      }

    } catch (error) {

      console.log(error)
      setError("Login Error")

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