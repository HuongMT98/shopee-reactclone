import img from "../../../../../Assets/Notification/NotificationLogOut.png"
import "./NavNotificationLogout.scss"
import { Link, useNavigate } from "react-router-dom"

function NavNotificationLogout({ props }) {
  const navigate = useNavigate()
  const handleClickLogin = props

  const handleClickSignUp = () => {
    if (window.confirm("Could you want to sign up?")) {
      navigate("/signup")
    } else {
      return console.log("Not login yet")
    }
  }

  return (
    <div>
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
    </div>
  )
}

export default NavNotificationLogout
