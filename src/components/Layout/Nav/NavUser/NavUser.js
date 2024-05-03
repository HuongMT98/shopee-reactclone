import { NavLink } from "react-router-dom"
import "./NavUser.scss"

function NavUser({ handleClickLogin }) {
  return (
    <nav className='nav-user'>
      <ul>
        <li>
          <NavLink to='/info'>my account</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>my purchase</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClickLogin}>log out</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavUser
