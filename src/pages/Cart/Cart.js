import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./Cart.scss"
import NavTopOnly from "../../components/Layout/NavTopOnly/NavTopOnly"
import { useSelector } from "react-redux"

function Cart() {
  return (
    <>
      <NavTopOnly />
      <div className='cart-container'>
        <div className='cart-container-wrap'>
          <h1>Cart Page</h1>
        </div>
      </div>
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Cart
