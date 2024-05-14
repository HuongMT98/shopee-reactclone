import img1 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider1.jpg"
import img2 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider2.jpg"
import img3 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider3.png"
import img4 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider4.png"
import img5 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider5.png"
import img6 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider6.jpg"
import img7 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider7.png"
import img8 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider8.jpg"
import img9 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider9.png"
import img10 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider10.jpg"
import img11 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider11.jpg"
import img12 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider12.jpg"
import img13 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider13.jpg"
import img14 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider14.jpg"
import img15 from "../../../../../../Assets/ShopeeMallSlider/shopeemallSlider15.png"

import Slider from "react-slick"
import { NavLink } from "react-router-dom"
function ShopeeMallCarouselRight() {
  const dataSlider = [
    {
      id: 1,
      image: img1,
      title: "Thời trang -50%",
    },
    {
      id: 2,
      image: img2,
      title: "Ưu đãi đến 50%",
    },
    {
      id: 3,
      image: img3,
      title: "Mua 1 được 2",
    },
    {
      id: 4,
      image: img4,
      title: "Deli siêu sale",
    },
    {
      id: 5,
      image: img5,
      title: "Mua 1 được 2",
    },
    {
      id: 6,
      image: img6,
      title: "Giảm đến 50%",
    },
    {
      id: 7,
      image: img7,
      title: "Quà mọi đơn",
    },
    {
      id: 8,
      image: img8,
      title: "Mua là có quà",
    },
    {
      id: 9,
      image: img9,
      title: "Mua 1 tặng 1 fullsize",
    },
    {
      id: 10,
      image: img10,
      title: "Mua 1 được 2",
    },
    {
      id: 11,
      image: img11,
      title: "Mua 1 được 2",
    },
    {
      id: 12,
      image: img12,
      title: "Mua 1 được 2",
    },
    {
      id: 13,
      image: img13,
      title: "Mua 1 được 2",
    },
    {
      id: 14,
      image: img14,
      title: "Mua 1 được 2",
    },
    {
      id: 15,
      image: img15,
      title: "Mua 1 được 2",
    },
  ]

  const settings = {
    infinite: false,
    slidesToShow: 1,
    speed: 300,
    rows: 2,
    slidesPerRow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 2,
          slidesToScroll: 2,
          rows: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <div className='shopee-mall-carousel-right'>
        <Slider {...settings}>
          {dataSlider.map((item) => {
            return (
              <NavLink
                to='./shopeemall'
                className='shopee-mall-carousel-right-wrap'
                key={item.id}
              >
                <div className='shopee-mall-carousel-right-img'>
                  <img src={item.image} alt='' />
                  <div>
                    <p>{item.title}</p>
                  </div>
                </div>
              </NavLink>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default ShopeeMallCarouselRight
