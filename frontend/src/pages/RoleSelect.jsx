// RoleSelect.jsx

import { Link } from "react-router-dom"

function RoleSelect() {

  return (

    <div className="min-h-screen bg-red-50 flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold text-red-600 mb-4">
        Call Siren
      </h1>

      <p className="text-xl text-gray-700 mb-10">
        Emergency Ambulance Response System
      </p>

      <div className="flex flex-col gap-6">

        {/* USER LOGIN */}

        <Link to="/user-login">

          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl text-xl w-80">
            User Login
          </button>

        </Link>

        {/* DRIVER AUTH */}

        <Link to="/driver-auth">

          <button className="bg-gray-800 hover:bg-black text-white px-10 py-4 rounded-xl text-xl w-80">
            Ambulance Driver Portal
          </button>

        </Link>

      </div>

    </div>

  )
}

export default RoleSelect