import { NavLink } from "react-router-dom"
import LOGO from "./NavLogo/LOGO"
import NavSearch from "./NavSearch/NavSearch"
import NavCart from "./NavCart/NavCart"
import "./NavBottom.scss"
import NavHotSearch from "./NavSearch/NavHotSearch/NavHotSearch"
import { useSelector } from "react-redux"

function NavBottom() {
  const numCartItems = useSelector((state) => state.cart.renderCart)

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
          <div className='cart-lenght'>
            <p>{numCartItems.length}</p>
          </div>
        </nav>
      </nav>
    </nav>
  )
}

export default NavBottom
