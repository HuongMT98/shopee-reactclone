import { Link } from "react-router-dom"

function SliderShowAds() {
  return (
    <>
      <div className='slider-ads-wrap'>
        <div className='slider-ads-container'>
          <Link className='slider-ads-content'>
            <img
              src='https://down-vn.img.susercontent.com/file/744b6c519828b25ecb7838a8c2aabee9'
              alt=''
              className='slider-ads-img'
            />
          </Link>
          <Link className='slider-ads-content'>
            <img
              src='https://digi.cropro.vn/wp-content/uploads/2022/08/Orange-Red-Flash-Sale-9.9-Promotion-Banner-1024x512.png'
              alt=''
              className='slider-ads-img'
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default SliderShowAds
