import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./PurchasePage.scss"
function PurchasePage() {
  return (
    <>
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
