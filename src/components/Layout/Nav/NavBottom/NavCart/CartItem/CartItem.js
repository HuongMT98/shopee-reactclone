import { Link } from "react-router-dom"
import "../../NavCart/NavCart.scss"

function CartItem() {
  return (
    <>
      <div className='add-to-cartwrap'>
        <div className='add-to-cart'>
          <Link to={"/cart"}>
            <button className='btn-cart'>view my shopping cart</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartItem
