import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";

import UserLogin from "./pages/UserLogin";
import UserEmergency from "./pages/UserEmergency";
import Tracking from "./pages/Tracking";

import DriverAuth from "./pages/DriverAuth";
import DriverLogin from "./pages/DriverLogin";
import DriverSignup from "./pages/DriverSignup";
import DriverDashboard from "./pages/DriverDashboard";

import MapComponent from "./components/MapComponent";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Main Role Selection */}
        <Route
          path="/"
          element={<RoleSelect />}
        />

        {/* User Routes */}
        <Route
          path="/user-login"
          element={<UserLogin />}
        />

        <Route
          path="/emergency"
          element={<UserEmergency />}
        />

        <Route
          path="/tracking"
          element={<Tracking />}
        />

        {/* Driver Routes */}
        <Route
          path="/driver-auth"
          element={<DriverAuth />}
        />

        <Route
          path="/driver-login"
          element={<DriverLogin />}
        />

        <Route
          path="/driver-signup"
          element={<DriverSignup />}
        />

        <Route
          path="/driver-dashboard"
          element={<DriverDashboard />}
        />

        {/* Map Route */}
        <Route
          path="/map"
          element={<MapComponent />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;