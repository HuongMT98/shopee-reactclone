import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img1 from "../../../../Assets/SliderLoading/1.jpg"
import img2 from "../../../../Assets/SliderLoading/2.jpg"
import img3 from "../../../../Assets/SliderLoading/3.jpg"
import img4 from "../../../../Assets/SliderLoading/4.jpg"
import img5 from "../../../../Assets/SliderLoading/5.jpg"
import img6 from "../../../../Assets/SliderLoading/6.jpg"
import img7 from "../../../../Assets/SliderLoading/7.jpg"
import img8 from "../../../../Assets/SliderLoading/8.jpg"
import img9 from "../../../../Assets/SliderLoading/9.jpg"
import img10 from "../../../../Assets/SliderLoading/10.jpg"
import img11 from "../../../../Assets/SliderLoading/11.jpg"
import img12 from "../../../../Assets/SliderLoading/12.jpg"
import img13 from "../../../../Assets/SliderLoading/13.jpg"
import img14 from "../../../../Assets/SliderLoading/14.jpg"
import { NavLink } from "react-router-dom"
function SliderShowCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  function SampleNextArrow(props) {
    const { className, onClick } = props
    return <div className={className} onClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props
    return <div className={className} onClick={onClick} />
  }

  return (
    <>
      <div className='slider-content'>
        <Slider {...settings}>
          <div>
            <NavLink to='/voucher'>
              <img src={img1} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img2} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img3} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img4} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img5} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img6} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img7} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img8} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img9} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img10} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img11} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img12} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img13} alt='' />
            </NavLink>
          </div>
          <div>
            <NavLink to='/voucher'>
              <img src={img14} alt='' />
            </NavLink>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default SliderShowCarousel
