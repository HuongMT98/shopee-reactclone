import { NavLink } from "react-router-dom"
import Nav from "../Nav/Nav"
import "./NotFound.scss"

function NotFound() {
  return (
    <>
      <Nav />
      <div className='not-found'>
        <div className='not-found-container'>
          <h1>404 Page Not Found</h1>
          <h3>
            Contact Administrator or <NavLink to='/'>Return Home</NavLink>
          </h3>
        </div>
      </div>
    </>
  )
}

export default NotFound
