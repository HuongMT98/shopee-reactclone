import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./Voucher.scss"
function Voucher() {
  return (
    <>
      <div className='voucher-page-container'>
        <div>Voucher Page</div>
      </div>
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Voucher
