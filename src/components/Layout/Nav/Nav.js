import { NavLink } from "react-router-dom"
import "./Nav.scss"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useState, useCallback } from "react"
import Navdropdown from "./Navdropdown/Navdropdown"
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
  const username = "Nguyen Van A"

  const languageChoice = [
    {
      id: 1,
      name: "Vietnamese",
    },
    {
      id: 2,
      name: "English",
    },
  ]

  const language = languageChoice.map((item) => (
    <NavLink to='/language' className={"language-text"}>
      {item.name}
    </NavLink>
  ))

  const handleClick = () => {
    setIsLogin(!isLogin)
    localStorage.setItem("isLogin", JSON.stringify(!isLogin))
    alert("Đăng xuất")
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
        {isLogin && (
          <nav className='nav-info'>
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
        {!isLogin && (
          <nav className='nav-info'>
            <Tippy content={"Thông báo"}>
              <NavLink to='/notifications'>Notifications</NavLink>
            </Tippy>
            <NavLink to='/help'>Help</NavLink>
            <button onClick={handleClick} isLogin={isLogin}>
              {isLogin ? "Logout" : "Login"}
            </button>
          </nav>
        )}
      </nav>
    </nav>
  )
}

export default Nav
