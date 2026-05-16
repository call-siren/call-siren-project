import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet"

import {
  useEffect,
  useState
} from "react"

import L from "leaflet"

import "leaflet/dist/leaflet.css"

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

function MapComponent() {

  const [driverPosition, setDriverPosition] =
    useState([11.0168, 76.9558])

  const [userPosition, setUserPosition] =
    useState([11.0168, 76.9558])

  useEffect(() => {

    const interval = setInterval(() => {

      const driverLat = localStorage.getItem("driverLat")
      const driverLng = localStorage.getItem("driverLng")

      const userLat = localStorage.getItem("userLat")
      const userLng = localStorage.getItem("userLng")

      if (driverLat && driverLng) {

        setDriverPosition([
          parseFloat(driverLat),
          parseFloat(driverLng)
        ])

      }

      if (userLat && userLng) {

        setUserPosition([
          parseFloat(userLat),
          parseFloat(userLng)
        ])

      }

    }, 1000)

    return () => clearInterval(interval)

  }, [])

  return (

    <MapContainer
      center={driverPosition}
      zoom={13}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "10px"
      }}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* DRIVER */}

      <Marker position={driverPosition}>

        <Popup>
          Ambulance Driver 🚑
        </Popup>

      </Marker>

      {/* USER */}

      <Marker position={userPosition}>

        <Popup>
          Emergency User 📍
        </Popup>

      </Marker>

    </MapContainer>

  )
}

export default MapComponent