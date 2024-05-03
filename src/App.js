import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.scss"

import Nav from "./components/Layout/Nav/Nav"
import NavBottom from "./components/Layout/Nav/NavBottom/NavBottom"
import Home from "./pages/Home/Home"
import Info from "./pages/Info/Info"
import Cart from "./pages/Cart/Cart"

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
          <Route path='/info' element={<Info />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
