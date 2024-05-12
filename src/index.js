import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./GlobalScss/App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import Notification from "./pages/Notification/Notification"
import FlashSalePage from "./pages/FlashSalePage/FlashSale"
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

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/notification' element={<Notification />} />
      <Route
        path='/flashsale'
        element={<FlashSalePage />}
        children={[<Route path='flashsalepage' element={<FlashSalePage />} />]}
      />

      {/* Router Purchase Nest Router V6*/}
      <Route path='/purchase' element={<PurchasePage />}>
        <Route path='purchasePay' element={<PurchaseToPay />} />
        <Route path='purchaseCancel' element={<PurchaseToCancel />} />
        <Route path='purchaseComplete' element={<PurchaseToComplete />} />
        <Route path='purchaseReceive' element={<PurchaseToReceive />} />
        <Route path='purchaseRefund' element={<PurchaseToRefund />} />
        <Route path='purchaseShip' element={<PurchaseToShip />} />
      </Route>
      {/* Router Purchase Nest Router V6 End*/}
      <Route path='/info' element={<SettingInfoPage />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/voucher' element={<Voucher />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
    <ScrollToTopBtn />
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
