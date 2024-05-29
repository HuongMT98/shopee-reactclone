import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./Cart.scss"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react"
import NavTopOnly from "../../components/Layout/NavTopOnly/NavTopOnly"
import formatNumber from "../../untils/fomatNumber"
import imgEmpty from "../../Assets/emtycart.png"
import {
  removeFromCart,
  clearCart,
  updateQuantity,
} from "../../Redux/cartSlice"
import { LiaShippingFastSolid } from "react-icons/lia"

function Cart() {
  const cartRender = useSelector((state) => state.cart.renderCart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleIncre = (e) => {
    e.preventDefault()
    dispatch()
  }

  const handleDecre = (e) => {
    e.preventDefault()
    dispatch(updateQuantity())
  }

  const handleHome = (e) => {
    e.preventDefault()
    navigate("/")
  }

  const handleDeleteItem = (e) => {
    e.preventDefault()
    dispatch(removeFromCart())
  }

  const handleClearCart = (e) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearCart())
    }
  }

  return (
    <>
      <NavTopOnly />
      <div className='cart-container'>
        <div className='cart-container-wrap'>
          {/* ⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜ */}
          {/* Khi giỏ hàng trống, render ra Ui */}
          {cartRender.length <= 0 && (
            <div className='cart-item-empty'>
              <div className='cart-item-empty-img'>
                <img className='img-noproduct' src={imgEmpty} alt='' />
              </div>
              <div className='cart-item-empty-text'>
                <p>Your shopping cart is empty</p>
              </div>
              <div className='cart-item-empty-btn'>
                <button onClick={handleHome}>Go Shopping Now</button>
              </div>
            </div>
          )}

          {/* ⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜ */}
          {/* Khi giỏ hàng có sản phẩm, render ra Ui */}
          {cartRender.length >= 1 &&
            cartRender.map((item) => {
              return (
                <>
                  <div className='cart-head-freeship'>
                    <LiaShippingFastSolid />
                    <p>
                      Select free shipping voucher below to enjoy shipping
                      discount
                    </p>
                  </div>
                  <div key={item.id} className='cart-item'>
                    <div className='cart-item-wrap'>
                      <div className='cart-item-img'>
                        <img src={item.image} alt='' />
                      </div>
                      <div className='cart-item-name-item'>
                        <p className='cart-item-name'>{item.name}</p>
                      </div>
                    </div>
                    <div className='cart-item-content'>
                      <div>
                        <p className='cart-item-price'>
                          đ{formatNumber(item.price)}
                        </p>
                      </div>
                      <div>
                        <HStack maxW='320px'>
                          {/* <Button {...dec}>-</Button> */}
                          <Button onClick={handleDecre}>-</Button>
                          <Input defaultValue={item.quantity} />
                          {/* <Button {...inc}>+</Button> */}
                          <Button onClick={handleIncre}>+</Button>
                        </HStack>
                      </div>
                      <div>
                        <p className='cart-item-total'>
                          đ{formatNumber(item.price * item.quantity)}
                        </p>
                      </div>
                      <div>
                        <button onClick={handleDeleteItem}>Delete</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          {/* ⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜ */}
          {/* Khi giỏ hàng có sản phẩm sẽ render ra UI nút clear cart */}
          {cartRender.length > 0 && (
            <button onClick={handleClearCart} className='button-clear'>
              Clear All Cart
            </button>
          )}
        </div>
      </div>
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Cart
