import { NavLink } from "react-router-dom"
import Nav from "../Nav/Nav"
import "./NotFound.scss"

function NotFound() {
  return (
    <>
      <Nav />
      <div className='not-found'>
        <div className='not-found-container'>
          <h1 className='not-found-title'>404</h1>
          <h2 className='not-found-subtitle'>
            Page <span>Not Found</span>
          </h2>
          <h3 className='not-found-description'>
            Contact Administrator or{" "}
            <NavLink to='/' className={"not-found-link"}>
              Return Home
            </NavLink>
          </h3>
        </div>
      </div>
    </>
  )
}

export default NotFound
