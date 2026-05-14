import { useState } from "react"
import { useNavigate } from "react-router-dom"

function UserLogin() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const navigate = useNavigate()

  const handleLogin = () => {

    localStorage.setItem("userName", name)
    localStorage.setItem("userPhone", phone)

    navigate("/emergency")
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">

      <h1 className="text-5xl font-bold text-red-600 mb-8">
        User Login
      </h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        className="border p-4 rounded-xl w-80 mb-4"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        className="border p-4 rounded-xl w-80 mb-6"
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-red-600 text-white px-8 py-4 rounded-xl w-80"
      >
        Continue
      </button>

    </div>
  )
}

export default UserLogin