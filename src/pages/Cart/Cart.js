import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./Cart.scss"
import NavTopOnly from "../../components/Layout/NavTopOnly/NavTopOnly"
import { useSelector } from "react-redux"
import formatNumber from "../../untils/fomatNumber"

function Cart() {
  const cart = useSelector((state) => state.cart.cart)
  return (
    <>
      <NavTopOnly />
      <div className='cart-container'>
        <div className='cart-container-wrap'>
          <h1>Cart Page</h1>
          {cart &&
            cart.map((item) => {
              return (
                <div key={item.id} className='cart-item-container'>
                  <div className='cart-item'>
                    <img src={item.image} alt='' className='cart-item-img' />
                    <div className='cart-item-info'>
                      <p className='cart-item-name'>{item.name}</p>
                      <p className='cart-item-price'>
                        {formatNumber(Math.round(item.giaTien * item.quantity))}
                        đ
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Cart
