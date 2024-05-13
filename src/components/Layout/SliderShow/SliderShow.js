import "./SliderShow.scss"
import "./SliderShow.responsive.scss"
import SliderShowAds from "./SliderShowAds/SliderShowAds"
import SliderShowCarousel from "./SliderShowCarousel/SliderShowCarousel"

function SliderShow() {
  return (
    <>
      <div className='slider-wrap'>
        <div className='slider-container'>
          <div className='slider-carousel'>
            <SliderShowCarousel />
          </div>
          <div className='slider-ads'>
            <SliderShowAds />
          </div>
        </div>
      </div>
    </>
  )
}

export default SliderShow
