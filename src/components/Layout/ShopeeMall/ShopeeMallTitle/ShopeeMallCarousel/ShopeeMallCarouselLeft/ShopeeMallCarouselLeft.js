import Slider from "react-slick"
import img1 from "../../../../../../Assets/ShopeeMall/shopeemall1.jpg"
import img2 from "../../../../../../Assets/ShopeeMall/shopeemall2.png"
import img3 from "../../../../../../Assets/ShopeeMall/shopeemall3.jpg"
import img4 from "../../../../../../Assets/ShopeeMall/shopeemall4.jpg"
import img5 from "../../../../../../Assets/ShopeeMall/shopeemall5.jpg"
import img6 from "../../../../../../Assets/ShopeeMall/shopeemall6.jpg"
import img7 from "../../../../../../Assets/ShopeeMall/shopeemall7.png"
import { NavLink } from "react-router-dom"

function ShopeeMallCarouselLeft() {
  const data = [img1, img2, img3, img4, img5, img6, img7]

  let settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className='shopee-mall-carousel-left'>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className='shopee-mall-carousel-left-img' key={index}>
              <NavLink to='./shopeemall'>
                <img src={item} key={index} alt='' />
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default ShopeeMallCarouselLeft
