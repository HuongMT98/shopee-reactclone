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
import { removeFromCart, clearCart, renderCart } from "../../Redux/cartSlice"

function Cart() {
  const cartRender = useSelector((state) => state.cart.renderCart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //Setup thư viện input number
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: cartRender.quantity,
      min: 1,
      max: 99,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const handleHome = (e) => {
    e.preventDefault()
    navigate("/")
  }

  const handleDeleteItem = (e) => {
    e.preventDefault()
    dispatch(removeFromCart(renderCart.id))
  }

  const handleClearCart = (e) => {
    e.preventDefault()
    dispatch(clearCart())
  }

  return (
    <>
      <NavTopOnly />
      <div className='cart-container'>
        <div className='cart-container-wrap'>
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
          {cartRender.length >= 1 &&
            cartRender.map((item) => {
              return (
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
                        <Button {...dec}>-</Button>
                        <Input {...input} />
                        <Button {...inc}>+</Button>
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
              )
            })}
          <button onClick={handleClearCart}>Clear</button>
        </div>
      </div>
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Cart
