import { useDispatch, useSelector } from "react-redux"
import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./Cart.scss"
import NavTopOnly from "../../components/Layout/NavTopOnly/NavTopOnly"

function Cart() {
  const renderCart = useSelector((state) => state.renderCart)
  const dispatch = useDispatch()

  const handleRemove = (e, itemId) => {
    e.preventDefault()
    const updatedCart = renderCart.filter((item) => item.id !== itemId)
    dispatch({ type: "REMOVE_TO_CART", payload: updatedCart })
  }

  const handleClear = (e) => {
    e.preventDefault()
    dispatch({ type: "CLEAR_CART" })
  }

  let totalQuantity = 0
  let totalPrice = 0

  return (
    <>
      <NavTopOnly />
      <div className='cart-container'>
        <div className='cart-container-wrap'>
          {renderCart
            .reduce((acc, item) => {
              if (acc.length === 0 || acc[acc.length - 1].id !== item.id) {
                totalQuantity += item.quantity
                totalPrice += item.price * item.quantity
                return [...acc, { ...item, quantity: item.quantity }]
              } else {
                acc[acc.length - 1].quantity += item.quantity
                totalQuantity += item.quantity
                totalPrice += item.price * item.quantity
                return acc
              }
            }, [])
            .map((item) => (
              <div key={item.id} className='cart-product-wrap'>
                <div className='cart-product-item'>
                  <div className='cart-product-img'>
                    <img src={item.image} alt='' />
                  </div>
                  <div className='cart-product-name'>{item.name}</div>
                  <div className='cart-product-quantity'>{totalQuantity}</div>
                  <div className='cart-product-price'>{totalPrice}</div>
                </div>
                <button
                  className='btn-cart'
                  onClick={(e) => handleRemove(e, item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          {renderCart && renderCart.length > 0 && (
            <button className='btn-cart-clear' onClick={handleClear}>
              Clear cart
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
