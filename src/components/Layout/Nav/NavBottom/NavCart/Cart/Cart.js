import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
      </Tippy>
    </>
  )
}

export default Cart
