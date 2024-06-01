import "./CartItem.scss"
import imgempty from "../../../../../../Assets/emtycart.png"
import formatNumber from "../../../../../../untils/fomatNumber"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

function CartItem() {
  const isLoginState = useSelector((state) => state.login.isLoggedIn)
  const cartItems = useSelector((state) => state.cart.renderCart)

  //Hàm gộp nhiều sản phẩm có cùng ID nhưng chỉ tăng số lượng
  let cartItemUnique = []
  if (cartItems) {
    cartItemUnique = Array.from(new Set(cartItems.map((item) => item.id))).map(
      (id) => cartItems.find((item) => item.id === id)
    )
  }

  return (
    <>
      <div className='cart-item-wrap'>
        <div className='cart-item-container'>
          {isLoginState === false && (
            <div className='cart-item-empty-product'>
              <div className='cart-item-empty-product-content'>
                <img className='img-noproduct' src={imgempty} alt='' />
                <p>No Products Yet</p>
              </div>
            </div>
          )}
          {isLoginState === true && cartItems.length <= 0 && (
            <div className='cart-item-empty-product'>
              <div className='cart-item-empty-product-content'>
                <img className='img-noproduct' src={imgempty} alt='' />
                <p>No Products Yet</p>
              </div>
            </div>
          )}

          {isLoginState === true && cartItems.length >= 1 && (
            <div className='cart-item-product-wrap'>
              <div className='cart-item-product-container'>
                <div className='cart-item-product-title'>
                  <p>Recently Added Products</p>
                </div>
                {cartItemUnique.slice(0, 6).map((item) => (
                  <div key={item.id} className='cart-item-content'>
                    <Link to={`/product/${item.id}`} className='cart-item-link'>
                      <img src={item.image} alt='' className='cart-item-img' />
                      <p className='cart-item-name'>{item.name}</p>
                      <p className='cart-item-price'>
                        {formatNumber(item.giaSauKhiGiam)}đ
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              <div className='total-cartitem'>
                <div className='total-cartitem-seemore'>
                  <p>
                    See more: {""}
                    <span className='total-cartlength'>
                      {cartItems.length} products
                    </span>
                  </p>
                </div>
                <NavLink to='/cart'>
                  <button className='cart-item-btn'>
                    view my shopping cart
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartItem
