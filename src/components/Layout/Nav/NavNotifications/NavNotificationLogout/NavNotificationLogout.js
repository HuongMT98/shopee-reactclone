import img from "../../../../../Assets/Notification/NotificationLogOut.png"
import "./NotificationLogout.scss"
function NotificationLogout({ handleClickLogin }, { handleClickSignUp }) {
  return (
    <>
      <div className='notification-logout-container'>
        <div className='notification-logout'>
          <div className='notification-logout-content'>
            <img src={img} alt='NotificationLogout' />
            <p>Log in to view notifications</p>
          </div>
          <div className='notification-logout-btn'>
            <button onClick={handleClickSignUp}>Sign Up</button>
            <button onClick={handleClickLogin}>Log In</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotificationLogout
