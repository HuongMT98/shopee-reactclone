import "./NavTopOnly.scss"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDown,
  faBell,
  faCircleQuestion,
  faGlobe,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Tippy from "@tippyjs/react"
import NavNotificationLogout from "../Nav/NavNotifications/NavNotificationLogout/NavNotificationLogout"
import NavUser from "../Nav/NavUser/NavUser"
import NavNotifications from "../Nav/NavNotifications/NavNotifications"
import DownloadApp from "../Nav/DownloadApp/DownloadApp"
import ApiUser from "../../../Api/ApiUser"
import LOGO from "./NavLogoTopOnly/LOGO"

function NavTopOnly() {
  const [user, setUser] = useState([])
  const [isLogin, setIsLogin] = useState(true)

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

  const handleClickLogin = () => {
    setIsLogin(!isLogin)
  }

  const handleClickSignUp = () => {
    return console.log("Sign Up")
  }
  return (
    <div className='nav-wrap-toponly'>
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
                    <NavNotificationLogout
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
                  <button onClick={handleClickSignUp}>Sign Up</button>
                </Link>
                <button onClick={handleClickLogin}>Login</button>
              </div>
            </nav>
          )}
        </nav>
      </nav>
      <div className='nav-logo'>
        <div className='nav-logo-wrap'>
          <div className='nav-logo-container'>
            <div className='logo'>
              <div className='logo-wrap'>
                <NavLink to='/'>
                  <LOGO />
                  <div className='logo-text'>
                    <p>Shopee Cart</p>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className='search'>
              <div className='search-bar'>
                <input
                  placeholder='Search for products, brands and shops'
                  className='search-input'
                />
              </div>
              <div className='search-btn'>
                <button type='button' className='btn'>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavTopOnly
