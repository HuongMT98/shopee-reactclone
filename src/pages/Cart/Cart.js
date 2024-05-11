import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import Nav from "../../components/Layout/Nav/Nav"
import "./Cart.scss"
function Cart() {
  return (
    <>
      <Nav />
      <div className='cart-container'>
        <h1>Cart Page</h1>
      </div>
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Cart
