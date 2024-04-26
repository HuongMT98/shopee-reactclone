import Categories from "../Categories/Categories"
import FlashSale from "../FlashSale/FlashSale"
import SliderBottom from "../SliderShow/SliderBottom/SliderBottom"
import SliderShow from "../SliderShow/SliderShow"
import "./Home.scss"

function Home() {
  return (
    <div className='home-container'>
      <SliderShow />
      <SliderBottom />
      <Categories />
      <FlashSale />
    </div>
  )
}

export default Home
