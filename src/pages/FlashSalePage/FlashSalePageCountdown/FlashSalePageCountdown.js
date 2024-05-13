import React from "react"
import { useState, useEffect } from "react"
import "./FlashSalePageCountdown.scss"

const FlashSalePageCountdown = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const deadline = "December, 31, 2024"

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='timer'>
      <p>
        <div className='timebox'>{days.toString().padStart(2, "0")}</div>
        <div className='timebox'>{hours.toString().padStart(2, "0")}</div>
        <div className='timebox'>{minutes.toString().padStart(2, "0")}</div>
        <div className='timebox'>{seconds.toString().padStart(2, "0")}</div>
      </p>
    </div>
  )
}

export default FlashSalePageCountdown
