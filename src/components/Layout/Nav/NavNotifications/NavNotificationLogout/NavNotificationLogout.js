import img from "../../../../../Assets/Notification/NotificationLogOut.png"
import "./NavNotificationLogout.scss"
import { Link } from "react-router-dom"
function NavNotificationLogout() {
  const handleClickLogin = () => {}

  const handleClickSignUp = () => {
    return console.log("Sign Up")
  }

  return (
    <>
      <div className='notification-logout-container'>
        <div className='notification-logout'>
          <div className='notification-logout-content'>
            <img src={img} alt='NotificationLogout' />
            <p>Log in to view notifications</p>
          </div>
          <div className='notification-logout-btn'>
            <button onClick={handleClickSignUp}>
              <Link to='/signup'>Sign Up</Link>
            </button>
            <button onClick={handleClickLogin}>
              <Link>Log In</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavNotificationLogout
