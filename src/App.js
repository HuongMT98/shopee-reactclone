import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.scss"

import Nav from "./components/Layout/Nav/Nav"
import NavBottom from "./components/Layout/Nav/NavBottom/NavBottom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Notification from "./pages/Notification/Notification"
import FlashSalePage from "./pages/FlashSalePage/FlashSale"
import PurchasePage from "./pages/PurchasePage/PurchasePage"
import SettingInfoPage from "./pages/SettingInfoPage/SettingInfoPage"
import Categories from "./pages/Categories/Categories"
import Voucher from "./pages/Voucher/Voucher"

function App() {
  return (
    <>
      <Router>
        <div className='nav-wrap'>
          <Nav />
          <NavBottom />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/flashsale' element={<FlashSalePage />} />
          <Route path='/purchase' element={<PurchasePage />} />
          <Route path='/info' element={<SettingInfoPage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/voucher' element={<Voucher />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
