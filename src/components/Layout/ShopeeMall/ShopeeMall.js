import "./ShopeeMall.scss"
import "./ShopeeMall.responsive.scss"
import ShopeeMallAutoCarousel from "./ShopeeMallTitle/ShopeeMallCarousel/ShopeeMallCarousel"
import ShopeeMallTitle from "./ShopeeMallTitle/ShopeeMallTitle"

function ShopeeMall() {
  return (
    <>
      <div className='shopee-mall'>
        <div className='shopee-mall-container'>
          <ShopeeMallTitle />
          <ShopeeMallAutoCarousel />
        </div>
      </div>
    </>
  )
}

export default ShopeeMall
