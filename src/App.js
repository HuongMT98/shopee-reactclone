import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.scss"

import Nav from "./components/Layout/Nav/Nav"
import NavBottom from "./components/Layout/Nav/NavBottom/NavBottom"
import Home from "./pages/Home/Home"
import Info from "./pages/Info/Info"
import Cart from "./pages/Cart/Cart"
import Notification from "./pages/Notification/Notification"
import Download from "./pages/Download/Download"
import Footer from "./components/Layout/Footer/Footer"
import FlashSalePage from "./pages/FlashSalePage/FlashSale"

function App() {
  return (
    <>
      <Router>
        {/* Render Navbar */}
        <div className='nav-wrap'>
          <Nav />
          <NavBottom />
        </div>
        {/* Render Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/download' element={<Download />} />
          <Route path='/flashsale' element={<FlashSalePage />} />
        </Routes>
        {/* Render footer */}
        <Footer />
      </Router>
    </>
  )
}

export default App
