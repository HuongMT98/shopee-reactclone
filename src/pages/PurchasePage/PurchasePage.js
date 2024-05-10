import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import Nav from "../../components/Layout/Nav/Nav"
import "./PurchasePage.scss"
function PurchasePage() {
  return (
    <>
      <Nav />
      <div className='purchasepage-container'>
        <h1>Purchase Page</h1>
        <FooterBottom />
        <FooterInfo />
        <FooterPolicy />
      </div>
    </>
  )
}

export default PurchasePage
