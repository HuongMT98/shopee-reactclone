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

function Nav() {
  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ApiUser()
        setUser(response.sort(() => Math.random() - 0.5))
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  //dùng data để render UI

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

  const language = languageChoice.map((item) => (
    <div key={item.id}>
      <NavLink to='/language' className={"language-text"}>
        {item.name}
      </NavLink>
    </div>
  ))

  const handleClickLogin = () => {
    setIsLogin(!isLogin)
    console.log(isLogin ? "Log Out Popup" : "Log In Popup")
  }

  const handleClickSignUp = () => {
    return console.log("Sign Up")
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

          {/* isLogin === true render UI login */}
          {isLogin && (
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
                content={<NavUser handleClickLogin={handleClickLogin} />}
                delay={[0, 500]}
                hideOnClick={true}
                interactive={true}
              >
                <NavLink className='user'>
                  {user.slice(0, 1).map((item) => (
                    <div className='user-wrap' key={item.id}>
                      <img src={item.image} alt='' className='user-img' />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </NavLink>
              </Tippy>
            </nav>
          )}

          {/* isLogin === false render UI log out */}
          {!isLogin && (
            <nav className='nav-info'>
              {/* Notifications */}
              <div className='notification-tippy-logout'>
                <Tippy
                  content={
                    <NotificationLogout
                      handleClickLogin={handleClickLogin}
                      handleClickSignUp={handleClickSignUp}
                    />
                  }
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
                  <button onClick={handleClickSignUp} isLogin={isLogin}>
                    Sign Up
                  </button>
                </Link>
                <button onClick={handleClickLogin} isLogin={isLogin}>
                  Login
                </button>
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
