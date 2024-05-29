import { Link, NavLink } from "react-router-dom"
import "../Nav/Nav.scss"
import "./Nav.responsive.scss"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react"
import NavUser from "./NavUser/NavUser"
import DownloadApp from "./DownloadApp/DownloadApp"
import NavNotifications from "../Nav/NavNotifications/NavNotifications"
import NotificationLogout from "../Nav/NavNotifications/NavNotificationLogout/NavNotificationLogout"
import NavBottom from "./NavBottom/NavBottom"
import {
  faAngleDown,
  faBell,
  faCircleQuestion,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
import ApiUser from "../../../Api/ApiUser"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../../../Redux/loginSlice"
import { useNavigate } from "react-router-dom"

function Nav() {
  const [user, setUser] = useState([])
  const dispatch = useDispatch()
  const isLoginState = useSelector((state) => state.login.isLoggedIn)
  const navigate = useNavigate()

  const languageChoice = [
    {
      id: 1,
      name: "English",
    },
    {
      id: 2,
      name: "Tiếng Việt",
    },
  ]

  //dùng data để render UI
  useEffect(() => {
    ApiUser().then((data) => {
      setUser(data)
    })
  }, [])

  const language = languageChoice.map((item) => (
    <div key={item.id}>
      <NavLink to='/language' className={"language-text"}>
        {item.name}
      </NavLink>
    </div>
  ))

  const handleClickLogin = (e) => {
    e.preventDefault()
    dispatch(login())
  }

  const handleClickLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  const handleClickSignUp = (e) => {
    e.preventDefault()

    if (window.confirm("Are you sure you want to sign up?")) {
      navigate("/signup")
    }
  }

  return (
    <div className='nav-wrap'>
      <nav className='nav'>
        <nav className='nav-item'>
          <nav className='nav-contact'>
            <NavLink to='/seller'>Seller Centre</NavLink>
            <Tippy content={<DownloadApp />} interactive={true} arrow={false}>
              <NavLink>Download</NavLink>
            </Tippy>
            <NavLink to='/'>
              Follow us on
              <FontAwesomeIcon icon={faFacebook} className='icon' />
              <FontAwesomeIcon icon={faInstagram} className='icon' />
            </NavLink>
          </nav>

          {/* isLoginState === true render UI login */}
          {isLoginState && (
            <nav className='nav-info'>
              {/* Notifications */}
              <div className='notification-tippy'>
                <Tippy
                  content={<NavNotifications />}
                  interactive={true}
                  arrow={true}
                  delay={[0, 500]}
                  placement='bottom-end'
                >
                  <NavLink to='/notification'>
                    <FontAwesomeIcon icon={faBell} className='icon' />
                    Notifications
                  </NavLink>
                </Tippy>
              </div>
              <NavLink to='/'>
                <FontAwesomeIcon icon={faCircleQuestion} className='icon' />
                Help
              </NavLink>

              {/* Language Choice */}
              <Tippy
                content={language}
                interactive={true}
                className='language'
                arrow={true}
              >
                <NavLink className={"language"}>
                  <button>
                    <FontAwesomeIcon icon={faGlobe} className='icon' />
                    English
                  </button>
                  <FontAwesomeIcon icon={faAngleDown} className='icon' />
                </NavLink>
              </Tippy>

              {/* Nav User  */}
              <Tippy
                content={<NavUser handleClickLogout={handleClickLogout} />}
                delay={[0, 500]}
                hideOnClick={true}
                interactive={true}
              >
                <NavLink className='user'>
                  {user.map((item) => (
                    <div className='user-wrap' key={item.id}>
                      <img src={item.image} alt='' className='user-img' />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </NavLink>
              </Tippy>
            </nav>
          )}

          {/* isLoginState === false render UI log out */}
          {!isLoginState && (
            <nav className='nav-info'>
              {/* Notifications */}
              <div className='notification-tippy-logout'>
                <Tippy
                  content={<NotificationLogout />}
                  interactive={true}
                  arrow={true}
                  delay={[0, 500]}
                  placement='bottom-end'
                >
                  <NavLink to='/notification'>
                    <FontAwesomeIcon icon={faBell} className='icon' />
                    Notifications
                  </NavLink>
                </Tippy>
              </div>

              {/* Help */}
              <NavLink to='/'>
                <FontAwesomeIcon icon={faCircleQuestion} className='icon' />
                Help
              </NavLink>

              {/* Language Choice */}
              <Tippy
                content={language}
                interactive={true}
                className='language'
                arrow={true}
              >
                <NavLink to='/' className={"language"}>
                  <FontAwesomeIcon icon={faGlobe} className='icon' />
                  English
                  <FontAwesomeIcon icon={faAngleDown} className='icon' />
                </NavLink>
              </Tippy>

              {/* Account  */}
              <div className='nav-info-account'>
                <Link to='/signup'>
                  <Tippy content='Click to sign up page'>
                    <button onClick={handleClickSignUp}>Sign Up</button>
                  </Tippy>
                </Link>
                <Tippy content='Click to Login'>
                  <button onClick={handleClickLogin}>Login</button>
                </Tippy>
              </div>
            </nav>
          )}
        </nav>
      </nav>
      <NavBottom />
    </div>
  )
}

export default Nav
