import { NavLink } from "react-router-dom"
import "./Navdropdown.scss"

function Navdropdown(handleClick) {
  return (
    <nav className='nav-dropdown'>
      <ul>
        <li>
          <NavLink to='/'>Tài khoản của tôi</NavLink>
        </li>
        <li>
          <NavLink>Đơn mua</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick}>Đăng xuất</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navdropdown
