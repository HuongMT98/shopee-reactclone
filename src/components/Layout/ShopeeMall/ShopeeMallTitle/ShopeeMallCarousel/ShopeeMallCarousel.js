import ShopeeMallCarouselLeft from "./ShopeeMallCarouselLeft/ShopeeMallCarouselLeft"
import ShopeeMallCarouselRight from "./ShopeeMallCarouselRight/ShopeeMallCarouselRight"

function ShopeeMallCarousel() {
  return (
    <>
      <div className='shopee-mall-carousel'>
        <ShopeeMallCarouselLeft />
        <ShopeeMallCarouselRight />
      </div>
    </>
  )
}

export default ShopeeMallCarousel
