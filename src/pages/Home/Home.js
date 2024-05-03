import Categories from "../../components/Layout/Categories/Categories"
import FlashSale from "../../components/Layout/FlashSale/FlashSale"
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
    </div>
  )
}

export default Home
