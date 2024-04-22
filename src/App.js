import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.scss"
import Home from "../src/components/Layout/Home/Home"
import Nav from "./components/Layout/Nav/Nav"

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
