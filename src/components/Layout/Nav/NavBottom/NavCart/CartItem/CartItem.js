import { Link } from "react-router-dom"
import "../../NavCart/NavCart.scss"
import img1 from "../../../../../../Assets/CartItem/cartitem1.jpg"
import "./CartItem.scss"

function CartItem() {
  return (
    <>
      <div className='cart-item-wrap'>
        <div className='title-cart'>
          <p>Recently Added Products</p>
        </div>
        <div className='detail'>
          <div className='detail-wrap'>
            <div className='img'>
              <img src={img1} alt='' />
            </div>
            <div className='title'>
              <p>Loremremraermarmaemreamrasdasd</p>
            </div>
            <div className='price'>
              đ<p>1212221</p>
            </div>
          </div>
        </div>
        <div className='detail'>
          <div className='detail-wrap'>
            <div className='img'>
              <img src={img1} alt='' />
            </div>
            <div className='title'>
              <p>Loremremraermarmaemreamrasdasd</p>
            </div>
            <div className='price'>
              <p>1212221</p>
            </div>
          </div>
        </div>
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
