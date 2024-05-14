import "./PurchasePage.scss"
import "./PurchasePage.responsive.scss"
// ==> Import COMPONENT
import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import Nav from "../../components/Layout/Nav/Nav"
import NavSideBar from "../../components/Layout/NavSideBar/NavSideBar"
import PurchasePageContent from "./PurchasePageContent/PurchasePageContent"
import PurchaseSearch from "./PurchasePageContent/PurchaseSearch/PurchaseSearch"
import { Outlet } from "react-router-dom"

function PurchasePage() {
  return (
    <>
      <div>
        <Nav />
        <div className='purchase-page'>
          <div className='purchase-page-container-wrap'>
            <div className='purchase-page-page-container'>
              <div className='purchase-page-sidebar'>
                <NavSideBar />
              </div>
              <div className='purchase-page-content'>
                <PurchasePageContent />
                <PurchaseSearch />
                {/* Render Child component here */}
                <Outlet />
                {/* Render Child component here */}
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
        <FooterInfo />
        <FooterPolicy />
      </div>
    </>
  )
}

export default PurchasePage
