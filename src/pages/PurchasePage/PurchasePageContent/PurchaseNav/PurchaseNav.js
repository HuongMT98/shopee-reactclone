import { NavLink } from "react-router-dom"
import "./PurchaseNav.scss"
function PurchaseNav() {
  return (
    <>
      <div className='wrap'>
        <div className='nav'>
          <div className='nav-list'>
            <div className='list-nav'>
              <NavLink to='/purchase'>All</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='/purchase/topay'>To Pay</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='/purchase/toship'>To Ship</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='/purchase/toreceive'>To Receive</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='/purchase/tocomplete'>Completed</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='/purchase/tocancel'>Cancelled</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='/purchase/torefund'>Return Refund</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseNav
