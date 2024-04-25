import SliderBottom from "../SliderShow/SliderBottom/SliderBottom"
import SliderShow from "../SliderShow/SliderShow"
import "./Home.scss"

function Home() {
  return (
    <div className='home-container'>
      <SliderShow />
      <SliderBottom />
    </div>
  )
}

export default Home
