import { NavLink } from "react-router-dom"
import "./Navdropdown.scss"

function NavUser({ handleClick }) {
  return (
    <nav className='nav-dropdown'>
      <ul>
        <li>
          <NavLink to='/info'>my account</NavLink>
        </li>
        <li>
          <NavLink to='./cart'>my purchase</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick}>log out</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavUser
