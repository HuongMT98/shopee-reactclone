import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiCarousel from "../../../../Api/ApiCarousel"
import img1 from "../../../../Assets/SliderAds/sliderAds1.jpg"
import img2 from "../../../../Assets/SliderAds/sliderAds2.jpg"

function SliderShowAds() {
  const [data, setData] = useState([])

  useEffect(() => {
    ApiCarousel().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <>
      <div className='slider-ads-wrap'>
        <div className='slider-ads-container'>
          {/* {data.map((item) => (
            <div className='slider-ads-content' key={item.id}>
              <Link to={`/voucher`}>
                <img
                  className='slider-ads-img'
                  src={item.image}
                  alt={item.name}
                />
              </Link>
            </div>
          ))} */}
          <div className='slider-ads-content'>
            <div className='slider-ads-content-wrap'>
              <Link to={`/voucher`}>
                <img className='slider-ads-img' src={img1} alt='' />
              </Link>
            </div>
            <div className='slider-ads-content-wrap'>
              <Link to={`/voucher`}>
                <img className='slider-ads-img' src={img2} alt='' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SliderShowAds
