import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../../../../../Redux/store"
import img from "../../../../../Assets/Notification/NotificationLogOut.png"
import "./NavNotificationLogout.scss"
import { Link } from "react-router-dom"
function NavNotificationLogout() {
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.isLogin)
  const handleClickLogin = () => {
    dispatch(isLogin ? logout() : login())
    // Save the login status to local storage
    localStorage.setItem("isLogin", JSON.stringify(isLogin))
  }

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
