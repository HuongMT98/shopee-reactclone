import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tippy from "@tippyjs/react"
import "./NavCart.scss"
import CartItem from "./CartItem/CartItem"

function NavCart() {
  return (
    <Tippy
      content={<CartItem />}
      placement='bottom-end'
      interactive={true}
      className='nav-cart-tippy'
    >
      <FontAwesomeIcon icon={faCartShopping} className='nav-cart' />
    </Tippy>
  )
}

export default NavCart
