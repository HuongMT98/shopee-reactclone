import { Link } from "react-router-dom"
import img1 from "../../../../Assets/sliderAds1.jpg"
import img2 from "../../../../Assets/sliderAds2.jpg"

function SliderShowAds() {
  return (
    <>
      <div className='slider-ads-wrap'>
        <div className='slider-ads-container'>
          <Link className='slider-ads-content'>
            <img src={img1} alt='' className='slider-ads-img' />
          </Link>
          <Link className='slider-ads-content'>
            <img src={img2} alt='' className='slider-ads-img' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default SliderShowAds
