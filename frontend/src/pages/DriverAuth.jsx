import { Link } from "react-router-dom"

function DriverAuth() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">

      <h1 className="text-5xl font-bold text-red-600 mb-10">
        Driver Portal
      </h1>

      <div className="flex flex-col gap-6">

        <Link to="/driver-login">

          <button className="bg-red-600 text-white px-10 py-4 rounded-xl w-80 text-xl">
            Login
          </button>

        </Link>

        <Link to="/driver-signup">

          <button className="bg-black text-white px-10 py-4 rounded-xl w-80 text-xl">
            Sign Up
          </button>

        </Link>

      </div>

    </div>
  )
}

export default DriverAuth