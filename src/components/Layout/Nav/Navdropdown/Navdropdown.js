import { NavLink } from "react-router-dom"
import "./Navdropdown.scss"

function Navdropdown({ handleClickLogin }) {
  return (
    <nav className='nav-dropdown'>
      <ul>
        <li>
          <NavLink to='/'>my account</NavLink>
        </li>
        <li>
          <NavLink>my purchase</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClickLogin}>log out</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navdropdown
