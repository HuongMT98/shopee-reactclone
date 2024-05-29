import { useDispatch } from "react-redux"
import img from "../../../../../Assets/Notification/NotificationLogOut.png"
import "./NavNotificationLogout.scss"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../../../../Redux/loginSlice"

function NavNotificationLogout({ props }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickLogin = (e) => {
    e.preventDefault()
    dispatch(login())
  }

  const handleClickSignUp = (e) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to sign up?")) {
      navigate("/signup")
    } else {
      console.log("No Sign up")
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
