import React from "react"
import Nav from "./components/Layout/Nav/Nav"
import SliderShow from "./components/Layout/SliderShow/SliderShow"
import SliderBottom from "./components/Layout/SliderShow/SliderBottom/SliderBottom"
import Categories from "./components/Layout/Categories/Categories"
import FlashSale from "./components/Layout/FlashSale/FlashSale"
import ShopeeMall from "./components/Layout/ShopeeMall/ShopeeMall"
import BodyWrapItem from "./components/Layout/BodyWrapItem/BodyWrapItem"
import Footer from "./components/Layout/Footer/Footer"

function App() {
  return (
    <>
      <Nav />
      <SliderShow />
      <SliderBottom />
      <Categories />
      <FlashSale />
      <ShopeeMall />
      <BodyWrapItem />
      <Footer />
    </>
  )
}

export default App
