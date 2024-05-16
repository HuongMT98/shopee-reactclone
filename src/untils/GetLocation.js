import React, { useState, useEffect } from "react"

function GetLocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null })

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
    } else {
      console.log("Geolocation is not available in your browser.")
    }
  }, [])

  return (
    <div>
      {position.latitude && position.longitude ? (
        <p>
          {position.latitude}, {position.longitude}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
export default GetLocation
