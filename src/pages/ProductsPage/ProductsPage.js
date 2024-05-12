import { Outlet } from "react-router-dom"
import Nav from "../../components/Layout/Nav/Nav"
import "./ProductsPage.scss"
import ScrollToTop from "../../untils/ScrollToTop"

function ProductsPage() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <div className='products'>
        <div className='products-container'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ProductsPage
