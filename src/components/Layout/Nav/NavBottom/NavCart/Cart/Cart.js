import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CiShoppingCart } from "react-icons/ci"
import CartItem from "../CartItem/CartItem"
import Tippy from "@tippyjs/react"

function Cart() {
  return (
    <>
      <Tippy
        content={<CartItem />}
        placement='bottom-end'
        interactive={true}
        className='nav-cart-tippy'
        delay={[0, 500]}
      >
        <FontAwesomeIcon icon={faCartShopping} className='nav-cart' />
        {/* <CiShoppingCart className='nav-cart' /> */}
      </Tippy>
    </>
  )
}

export default Cart
