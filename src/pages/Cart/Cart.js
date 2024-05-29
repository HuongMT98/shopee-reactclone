import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./Cart.scss"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Button, HStack, Input } from "@chakra-ui/react"
import NavTopOnly from "../../components/Layout/NavTopOnly/NavTopOnly"
import formatNumber from "../../untils/fomatNumber"
import imgEmpty from "../../Assets/emtycart.png"
import {
  removeFromCart,
  clearCart,
  updateQuantity,
} from "../../Redux/cartSlice"
import { LiaShippingFastSolid } from "react-icons/lia"
import { useState } from "react"
import Tippy from "@tippyjs/react"

function Cart() {
  const cartRender = useSelector((state) => state.cart.renderCart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [uiQuantity, SetUiQuantity] = useState()
  const [editQuantity, setEditQuantity] = useState({
    id: "",
    status: "",
  })

  const handleIncre = (e) => {
    e.preventDefault()
    if (cartRender.length > 0) {
      dispatch(updateQuantity(cartRender[0].id))
      SetUiQuantity(uiQuantity + 1)
    }
  }

  const handleDecre = (e) => {
    e.preventDefault()
    if (cartRender.length > 0) {
      dispatch(updateQuantity(cartRender[0].id))
      SetUiQuantity(uiQuantity - 1)
    }
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
          {/* Render ra thanh UI khi có sản phẩm */}
          {cartRender.length > 0 && (
            <>
              <div className='cart-head-freeship'>
                <LiaShippingFastSolid />
                <p>
                  Select free shipping voucher below to enjoy shipping discount
                </p>
              </div>
              <div className='cart-head-liveaction'>
                <div className='cart-head-liveaction-title'>
                  <p>Products</p>
                </div>
                <div className='cart-head-liveaction-item'>
                  <p>Unit Price</p>
                  <p>Quantity</p>
                  <p>Total Price</p>
                  <p>Actions</p>
                </div>
              </div>
            </>
          )}
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
                <div key={item.id} className='cart-item'>
                  <NavLink
                    to={`/product/${item.id}`}
                    className='cart-item-link'
                  >
                    <Tippy
                      content={<p>{item.name}</p>}
                      placement='bottom-end'
                      arrow={true}
                      animation='scale'
                      duration={(1000, 200)}
                      theme='dark'
                    >
                      <div className='cart-item-wrap'>
                        <div className='cart-item-img'>
                          <img src={item.image} alt='' />
                        </div>
                        <div className='cart-item-name-item'>
                          <p className='cart-item-name'>{item.name}</p>
                        </div>
                      </div>
                    </Tippy>
                  </NavLink>
                  <div className='cart-item-content'>
                    <div className='cart-item-price-wrap'>
                      <p className='cart-item-price-old'>
                        đ{formatNumber(item.price)}
                      </p>
                      <p className='cart-item-price-new'>
                        đ{formatNumber(item.calculateGiaSauKhiGiam)}
                      </p>
                    </div>
                    <div className='cart-item-quantity'>
                      <HStack maxW='320px'>
                        <Button onClick={handleDecre}>-</Button>
                        <Input defaultValue={item.quantity} />
                        <Button onClick={handleIncre}>+</Button>
                      </HStack>
                    </div>
                    <div className='cart-item-total-wrap'>
                      <p className='cart-item-total'>
                        đ{formatNumber(item.giaTien)}
                      </p>
                    </div>
                    <div className='cart-item-delete'>
                      <button
                        onClick={handleDeleteItem}
                        className='button-delete'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
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
