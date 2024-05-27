import { NavLink } from "react-router-dom"
import "./NavUser.scss"

function NavUser({ props }) {
  const handleClickLogout = { props }
  return (
    <nav className='nav-user'>
      <ul>
        <li>
          <NavLink to='/info'>my account</NavLink>
        </li>
        <li>
          <NavLink to='/purchase'>my purchase</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClickLogout}>log out</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavUser
