import { NavLink } from "react-router-dom"
import "./Nav.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

function Nav() {
  const [isLogin, setIsLogin] = useState(true)

  const handleClick = () => {
    setIsLogin(!isLogin)
    localStorage.setItem("isLogin", JSON.stringify(!isLogin))
  }

  return (
    <nav className='nav'>
      <nav className='nav-item'>
        <nav className='nav-contact'>
          <NavLink to='/seller'>Seller Centre</NavLink>
          <NavLink to='/download'>Download</NavLink>
          <NavLink to='/'>
            Follow us on
            <FontAwesomeIcon icon={faFacebook} className='icon' />
            <FontAwesomeIcon icon={faInstagram} className='icon' />
          </NavLink>
        </nav>
        {isLogin && (
          <nav className='nav-info'>
            <NavLink to='/notifications'>Notifications</NavLink>
            <NavLink to='/help'>Help</NavLink>
            <NavLink to='/language'>English</NavLink>
            <NavLink to='/user' className='user'>
              <img
                src='https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg'
                className='user-img'
                alt='user-img'
              />
              huonglovely998
            </NavLink>
          </nav>
        )}
        {!isLogin && (
          <nav className='nav-info'>
            <NavLink to='/notifications'>Notifications</NavLink>
            <NavLink to='/help'>Help</NavLink>
          </nav>
        )}
      </nav>
      <button onClick={handleClick}>{isLogin ? "Logout" : "Login"}</button>
    </nav>
  )
}

export default Nav
