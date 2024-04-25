import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.scss"
import Home from "../src/components/Layout/Home/Home"
import Nav from "./components/Layout/Nav/Nav"
import NavBottom from "./components/Layout/Nav/NavBottom/NavBottom"

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
        </Routes>
      </Router>
    </>
  )
}

export default App
