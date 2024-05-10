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

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='cart' element={<Cart />} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/flashsale' element={<FlashSalePage />} />
      <Route path='/purchase' element={<PurchasePage />} />
      <Route path='/info' element={<SettingInfoPage />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/voucher' element={<Voucher />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
