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
              <NavLink to='purchasePay'>To Pay</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='purchaseShip'>To Ship</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='purchaseReceive'>To Receive</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='purchaseComplete'>Completed</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='purchaseCancel'>Cancelled</NavLink>
            </div>
            <div className='list-nav'>
              <NavLink to='purchaseRefund'>Return Refund</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseNav
