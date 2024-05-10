import { NavLink } from "react-router-dom"
import LOGO from "./NavLogo/LOGO"
import NavSearch from "./NavSearch/NavSearch"
import NavCart from "./NavCart/NavCart"
import "./NavBottom.scss"
import NavHotSearch from "./NavSearch/NavHotSearch/NavHotSearch"

function NavBottom() {
  return (
    <nav className='nav-bottom'>
      <nav className='nav-bottom-item'>
        <NavLink className='nav-bottom-logo-img' to='/'>
          <LOGO />
        </NavLink>
        <nav className='nav-search'>
          <NavSearch />
          <NavHotSearch />
        </nav>
        <nav className='nav-cart'>
          <NavCart />
        </nav>
      </nav>
    </nav>
  )
}

export default NavBottom
