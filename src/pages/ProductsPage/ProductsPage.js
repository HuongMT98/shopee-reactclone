import { Outlet } from "react-router-dom"
import Nav from "../../components/Layout/Nav/Nav"
import "./ProductsPage.scss"
import ScrollToTop from "../../untils/ScrollToTop"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"

function ProductsPage() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <div className='products'>
        <div className='products-container'>
          <Outlet />
          <FooterBottom />
          <FooterInfo />
          <FooterPolicy />
        </div>
      </div>
    </>
  )
}

export default ProductsPage
