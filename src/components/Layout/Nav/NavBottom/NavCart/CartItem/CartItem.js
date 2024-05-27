import "../../NavCart/NavCart.scss"
import "./CartItem.scss"
import { useDispatch, useSelector } from "react-redux"
import { loginSlice } from "../../../../../../Redux/loginSlice"
import imgempty from "../../../../../../Assets/emtycart.png"
import { NavLink } from "react-router-dom"
import formatNumber from "../../../../../../untils/fomatNumber"

function CartItem() {
  const dispatch = useDispatch()
  // Trạng thái đăng nhập của người dùng từ Redux
  const isLoginState = useSelector((state) => state.login.isLoggedIn)
  console.log(isLoginState)

  // Lấy danh sách sản phẩm từ Redux
  const cartItems = useSelector((state) => state.cart.renderCart)
  console.log(cartItems)

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(loginSlice.actions.login())
  }
  const handleSignUp = (e) => {
    e.preventDefault()
    if (window.confirm("Could you please sign up?")) {
      window.location.href = "/signup"
    } else {
      console.log("cancel")
    }
  }

  // Nếu trùng ID, sản phẩm sẽ gộp thành 1
  let cartItemUnique = []
  if (cartItems) {
    cartItemUnique = Array.from(new Set(cartItems.map((item) => item.id))).map(
      (id) => cartItems.find((item) => item.id === id)
    )
  }

  // Declare and assign itemCart
  const itemCart = cartItemUnique

  return (
    <>
      <div className='cart-item-wrap'>
        <div className='cart-item-container'>
          {isLoginState === false && (
            <div className='cart-item-empty'>
              <div className='cart-item-empty-text'>
                <p>Log in or sign up to view orders</p>
              </div>
              <div className='cart-item-empty-button'>
                <div className='btn-empty'>
                  <button onClick={handleLogin} className='btn-btn-empty'>
                    Log In
                  </button>
                </div>
                <div className='btn-empty'>
                  <button onClick={handleSignUp} className='btn-btn-empty'>
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )}

          {isLoginState === true && itemCart.length <= 0 && (
            <div className='cart-item-empty-product'>
              <div className='cart-item-empty-product-content'>
                <img className='img-noproduct' src={imgempty} alt='' />
                <p>No Products Yet</p>
              </div>
            </div>
          )}

          {isLoginState === true && itemCart.length >= 1 && (
            <div className='cart-item-product-wrap'>
              <div className='cart-item-product-container'>
                {cartItemUnique.map((item) => (
                  <div key={item.id} className='cart-item-content'>
                    <img src={item.image} alt='' className='cart-item-img' />
                    <p className='cart-item-name'>{item.name}</p>
                    <p className='cart-item-price'>
                      {formatNumber(Math.round(item.giaTien * item.quantity))}đ
                    </p>
                  </div>
                ))}
              </div>
              <NavLink to='/cart'>
                <button className='cart-item-btn'>See all products</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartItem
