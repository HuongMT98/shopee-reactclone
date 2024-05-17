import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./GlobalScss/App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import Notification from "./pages/Notification/Notification"
import FlashSalePage from "./pages/FlashSalePage/FlashSalePage"
import PurchasePage from "./pages/PurchasePage/PurchasePage"
import SettingInfoPage from "./pages/SettingInfoPage/SettingInfoPage"
import Categories from "./pages/Categories/Categories"
import Voucher from "./pages/Voucher/Voucher"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import PurchaseToPay from "./pages/PurchasePage/PurchaseToPay/PurchaseToPay"
import PurchaseToShip from "./pages/PurchasePage/PurchaseToShip/PurchaseToShip"
import PurchaseToCancel from "./pages/PurchasePage/PurchaseToCancel/PurchaseToCancel"
import PurchaseToComplete from "./pages/PurchasePage/PurchaseToComplete/PurchaseToComplete"
import PurchaseToReceive from "./pages/PurchasePage/PurchaseToReceive/PurchaseToReceive"
import PurchaseToRefund from "./pages/PurchasePage/PurchaseToRefund/PurchaseToRefund"
import ScrollToTopBtn from "./untils/scrollToTopBtn"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ProductsPageDetail from "./pages/ProductsPage/ProductsPageDetail/ProductsPageDetail"
import NotFound from "./components/Layout/NotFound/NotFound"
import store from "./Redux/store"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route key='home' path='/' element={<App />} />

        <Route key='*' path='/*' element={<NotFound />} />
        <Route key='cart' path='/cart' element={<Cart />} />
        <Route
          key='notification'
          path='/notification'
          element={<Notification />}
        />

        <Route key='flashsale' path='/flashsale' element={<FlashSalePage />} />

        {/* Router Purchase Nest Router V6*/}
        <Route key='purchase' path='/purchase' element={<PurchasePage />}>
          <Route
            key='purchasePay'
            path='purchasePay'
            element={<PurchaseToPay />}
          />
          <Route
            key='purchaseCancel'
            path='purchaseCancel'
            element={<PurchaseToCancel />}
          />
          <Route
            key='purchaseComplete'
            path='purchaseComplete'
            element={<PurchaseToComplete />}
          />
          <Route
            key='purchaseReceive'
            path='purchaseReceive'
            element={<PurchaseToReceive />}
          />
          <Route
            key='purchaseRefund'
            path='purchaseRefund'
            element={<PurchaseToRefund />}
          />
          <Route
            key='purchaseShip'
            path='purchaseShip'
            element={<PurchaseToShip />}
          />
        </Route>

        {/* Router Product Nest Router V6*/}
        <Route key='product' path='/product' element={<ProductsPage />}>
          <Route
            key='productDetail'
            path=':productId'
            element={<ProductsPageDetail />}
          />
        </Route>

        <Route key='info' path='/info' element={<SettingInfoPage />} />
        <Route key='categories' path='/categories' element={<Categories />} />
        <Route key='voucher' path='/voucher' element={<Voucher />} />
        <Route key='signup' path='/signup' element={<SignUpPage />} />
      </Routes>
      <ScrollToTopBtn />
    </BrowserRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
