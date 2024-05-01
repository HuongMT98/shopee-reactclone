import { Link, NavLink } from "react-router-dom"
import "./Nav.scss"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import Navdropdown from "./NavUser/NavUser"
import DownloadApp from "./DownloadApp/DownloadApp"
import Notifications from "./Notifications/Notifications"
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

  const handleClick = () => {
    setIsLogin(!isLogin)
    localStorage.setItem("isLogin", JSON.stringify(!isLogin))
    alert(isLogin ? "Log Out" : "Log In")
  }

  const handleClickSignUp = () => {
    alert("Sign Up")
    return (
      <Link to='/buyer/signup?next=https%3A%2F%2Fshopee.vn%2F'>Sign Up</Link>
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
                content={<Notifications username={username} />}
                interactive={true}
                arrow={true}
                delay={[0, 500]}
                placement='bottom-end'
              >
                <NavLink to='/notifications'>
                  <FontAwesomeIcon icon={faBell} className='icon' />
                  Notifications
                </NavLink>
              </Tippy>
            </div>
            <NavLink to='/help'>
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
              <NavLink to='/language' className={"language"}>
                <FontAwesomeIcon icon={faGlobe} className='icon' />
                English
                <FontAwesomeIcon icon={faAngleDown} className='icon' />
              </NavLink>
            </Tippy>

            {/* Nav DropDown User  */}
            <Tippy
              content={
                <Navdropdown
                  handleClick={handleClick}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
              }
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
            <div className='notification-tippy'>
              <Tippy
                content={<Notifications username={username} />}
                interactive={true}
                arrow={true}
                delay={[0, 500]}
                placement='bottom-end'
              >
                <NavLink to='/notifications'>
                  <FontAwesomeIcon icon={faBell} className='icon' />
                  Notifications
                </NavLink>
              </Tippy>
            </div>

            {/* Help */}
            <NavLink to='/help'>
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
              <NavLink to='/language' className={"language"}>
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
              <button onClick={handleClick} isLogin={isLogin}>
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
