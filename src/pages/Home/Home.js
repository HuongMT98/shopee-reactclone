import BodyWrapItem from "../../components/Layout/BodyWrapItem/BodyWrapItem"
import Categories from "../../components/Layout/Categories/Categories"
import FlashSale from "../../components/Layout/FlashSale/FlashSale"
import Footer from "../../components/Layout/Footer/Footer"
import ShopeeMall from "../../components/Layout/ShopeeMall/ShopeeMall"
import SliderBottom from "../../components/Layout/SliderShow/SliderBottom/SliderBottom"
import SliderShow from "../../components/Layout/SliderShow/SliderShow"
import "./Home.scss"

function Home() {
  return (
    <div className='home-container'>
      <SliderShow />
      <SliderBottom />
      <Categories />
      <FlashSale />
      <ShopeeMall />
      <BodyWrapItem />
      <Footer />
    </div>
  )
}

export default Home
