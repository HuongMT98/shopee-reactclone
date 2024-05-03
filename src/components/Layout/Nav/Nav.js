import { Link, NavLink } from "react-router-dom"
import "./Nav.scss"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import NavUser from "./NavUser/NavUser"
import DownloadApp from "./DownloadApp/DownloadApp"
import NavNotifications from "../Nav/NavNotifications/NavNotifications"
import NotificationLogout from "../Nav/NavNotifications/NavNotificationLogout/NavNotificationLogout"

import {
  faAngleDown,
  faBell,
  faCircleQuestion,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"

function Nav() {
  const [isLogin, setIsLogin] = useState(true)
  const username = "--USER TEST--"

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
    let saveLocalLogin = localStorage.setItem(
      "isLogin",
      JSON.stringify(!isLogin)
    )
    console.log(saveLocalLogin)

    alert(isLogin ? "Log Out Popup" : "Log In Popup")
  }

  const handleClickSignUp = () => {
    alert("Sign Up")
    return (
      <div>
        <Link to='https://shopee.vn/buyer/signup?next=https%3A%2F%2Fshopee.vn%2F'>
          Sign Up
        </Link>
      </div>
    )
  }

  return (
    <nav className='nav'>
      <nav className='nav-item'>
        <nav className='nav-contact'>
          <NavLink to='/seller'>Seller Centre</NavLink>
          <Tippy content={<DownloadApp />} interactive={true} arrow={false}>
            <NavLink to='/download'>Download</NavLink>
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
                content={<NavNotifications username={username} />}
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
                <buton>
                  <FontAwesomeIcon icon={faGlobe} className='icon' />
                  English
                </buton>
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
                <img
                  src='https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg'
                  className='user-img'
                  alt='user-img'
                />
                {username}
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
              <button onClick={handleClickSignUp} isLogin={isLogin}>
                Sign Up
              </button>
              <button onClick={handleClickLogin} isLogin={isLogin}>
                Login
              </button>
            </div>
          </nav>
        )}
      </nav>
    </nav>
  )
}

export default Nav
