import Footer from "../../components/Layout/Footer/Footer"
import Nav from "../../components/Layout/Nav/Nav"
import "./Notification.scss"
import { useEffect, useState } from "react"
import ApiNotification from "../../Api/ApiNotification"

function Notification() {
  const [data, setData] = useState([])

  useEffect(() => {
    ApiNotification().then((data) => {
      setData(data)
    })
  }, [])
  return (
    <>
      <Nav />
      <div className='notification'>
        <div className='notification-container'>
          {data.map((item) => (
            <div className='notification-item' key={item.id}>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Notification
