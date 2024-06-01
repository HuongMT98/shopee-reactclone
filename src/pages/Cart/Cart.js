import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./Cart.scss"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Button, HStack, Input } from "@chakra-ui/react"
import NavTopOnly from "../../components/Layout/NavTopOnly/NavTopOnly"
import formatNumber from "../../untils/fomatNumber"
import imgEmpty from "../../Assets/emtycart.png"
import {
  removeFromCart,
  clearCart,
  increateQuantityCart,
  decreateQuantityCart,
} from "../../Redux/cartSlice"
import { LiaShippingFastSolid } from "react-icons/lia"
import Tippy from "@tippyjs/react"
import { Checkbox } from "rsuite"
import OffersCart from "./OffersCart/OffersCart"

function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartRender = useSelector((state) => state.cart.renderCart)

  // Handle tăng giảm sản phẩm

  const handleHome = (e) => {
    e.preventDefault()
    navigate("/")
  }

  const handleQuantityChange = (event) => {}

  //Handle redux toolkit

  //Tăng sản phẩm thêm 1 khi ấn nút
  const increateItem = (itemId) => {
    dispatch(increateQuantityCart(itemId))
  }

  //Giảm sản phẩm khi ấn nút
  const decreateItem = (itemId) => {
    dispatch(decreateQuantityCart(itemId))
  }

  // Xóa sản phẩm
  const handleDeleteItem = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  //Clear Cart
  const handleClearCart = (e) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearCart())
    }
  }

  //Thanh toán
  const handleCheckout = (e) => {
    e.preventDefault()
    navigate("/checkout")
  }

  // Render ra 1 sản phẩm duy nhất khi trùng id
  let cartItemUnique = cartRender.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      acc.push({ ...item })
    }
    return acc
  }, [])

  //Tính tổng tiền của giỏ hàng
  const totalCart = cartRender
    .map((item) => item.giaSauKhiGiam * item.quantity)
    .reduce((a, b) => a + b, 0)

  return (
    <>
      <NavTopOnly />
      <div className='cart-container'>
        <div className='cart-container-wrap'>
          {/* ⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜ */}
          {/* Render ra thanh UI khi có sản phẩm */}
          {cartItemUnique.length > 0 && (
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
          {cartItemUnique.length <= 0 && (
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
          {cartItemUnique.length > 0 &&
            cartItemUnique.map((item, index) => {
              return (
                <div key={index} className='cart-item'>
                  <Checkbox value={item.id} />
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
                        đ{formatNumber(item.giaSauKhiGiam)}
                      </p>
                    </div>
                    <div className='cart-item-quantity'>
                      <HStack maxW='320px'>
                        <Button onClick={() => decreateItem(item.id)}>-</Button>
                        <Input
                          value={item.quantity || 0}
                          onChange={handleQuantityChange}
                        />
                        <Button onClick={() => increateItem(item.id)}>+</Button>
                      </HStack>
                    </div>
                    <div className='cart-item-total-wrap'>
                      <p className='cart-item-total'>
                        đ{formatNumber(item.giaSauKhiGiam * item.quantity)}
                      </p>
                    </div>
                    <div className='cart-item-delete'>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
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
          {cartItemUnique.length > 0 && (
            <>
              <div className='cart-itemTotal'>
                <p className='cart-item-total-price'>
                  Total: (
                  <span className='lengthCart'>{cartRender.length} items</span>)
                  đ<span className='totalCart'>{formatNumber(totalCart)}</span>
                </p>
                <button className='button-checkout' onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
              <button onClick={handleClearCart} className='button-clear'>
                Clear All Cart
              </button>
            </>
          )}
        </div>
      </div>
      <OffersCart />
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Cart
