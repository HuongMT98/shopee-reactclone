import img1 from "../../../../Assets/FlashSale/flashsale1.jpg"
import img1a from "../../../../Assets/FlashSale/flashsale1a.png"
import img2 from "../../../../Assets/FlashSale/flashsale2.jpg"
import img2a from "../../../../Assets/FlashSale/flashsale2a.png"
import img3 from "../../../../Assets/FlashSale/flashsale3.jpg"
import img3a from "../../../../Assets/FlashSale/flashsale3a.png"
import img4 from "../../../../Assets/FlashSale/flashsale4.jpg"
import img4a from "../../../../Assets/FlashSale/flashsale4a.png"
import img5 from "../../../../Assets/FlashSale/flashsale5.jpg"
import img5a from "../../../../Assets/FlashSale/flashsale5a.png"
import img6 from "../../../../Assets/FlashSale/flashsale6.jpg"
import img6a from "../../../../Assets/FlashSale/flashsale6a.png"
import img7 from "../../../../Assets/FlashSale/flashsale7.jpg"
import img7a from "../../../../Assets/FlashSale/flashsale7a.png"
import img8 from "../../../../Assets/FlashSale/flashsale8.jpg"
import img8a from "../../../../Assets/FlashSale/flashsale8a.png"
import img9 from "../../../../Assets/FlashSale/flashsale9.jpg"
import img9a from "../../../../Assets/FlashSale/flashsale9a.png"
import img10 from "../../../../Assets/FlashSale/flashsale10.jpg"
import img10a from "../../../../Assets/FlashSale/flashsale10a.png"
import img11 from "../../../../Assets/FlashSale/flashsale11.jpg"
import img11a from "../../../../Assets/FlashSale/flashsale11a.png"
import img12 from "../../../../Assets/FlashSale/flashsale12.jpg"
import img12a from "../../../../Assets/FlashSale/flashsale12a.png"
import img13 from "../../../../Assets/FlashSale/flashsale13.jpg"
import img13a from "../../../../Assets/FlashSale/flashsale13a.png"
import img14 from "../../../../Assets/FlashSale/flashsale14.jpg"
import img14a from "../../../../Assets/FlashSale/flashsale14a.png"
import img15 from "../../../../Assets/FlashSale/flashsale15.jpg"
import img15a from "../../../../Assets/FlashSale/flashsale15a.png"
import img16 from "../../../../Assets/FlashSale/flashsale16.jpg"
import img16a from "../../../../Assets/FlashSale/flashsale16a.png"
import flashsalebanner from "../../../../Assets/FlashSale/flashsalebanner.png"

import Slider from "react-slick"
import { NavLink } from "react-router-dom"

function FlashSaleContent() {
  const dataFlashSale = [
    {
      id: 1,
      image: img1,
      context: img1a,
      sale: "-22%",
      price: "139.000",
    },
    {
      id: 2,
      image: img2,
      context: img2a,
      sale: "-45%",
      price: "71.000",
    },
    {
      id: 3,
      image: img3,
      context: img3a,
      sale: "-9%",
      price: "1.047.000",
    },
    {
      id: 4,
      image: img4,
      context: img4a,
      sale: "-37%",
      price: "2.018.000",
    },
    {
      id: 5,
      image: img5,
      context: img5a,
      sale: "-20%",
      price: "716.000",
    },
    {
      id: 6,
      image: img6,
      context: img6a,
      sale: "-60%",
      price: "404.000",
    },
    {
      id: 7,
      image: img7,
      context: img7a,
      sale: "-44%",
      price: "419.000",
    },
    {
      id: 8,
      image: img8,
      context: img8a,
      sale: "-55%",
      price: "149.000",
    },
    {
      id: 9,
      image: img9,
      context: img9a,
      sale: "-25%",
      price: "278.000",
    },
    {
      id: 10,
      image: img10,
      context: img10a,
      sale: "-44%",
      price: "100.000",
    },
    {
      id: 11,
      image: img11,
      context: img11a,
      sale: "-43%",
      price: "200.000",
    },
    {
      id: 12,
      image: img12,
      context: img12a,
      sale: "-53%",
      price: "220.000",
    },
    {
      id: 13,
      image: img13,
      context: img13a,
      sale: "-64%",
      price: "19.000",
    },
    {
      id: 14,
      image: img14,
      context: img14a,
      sale: "-64%",
      price: "277.900",
    },
    {
      id: 15,
      image: img15,
      context: img15a,
      sale: "-61%",
      price: "13.500",
    },
    {
      id: 16,
      image: img16,
      context: img16a,
      sale: "-61%",
      price: "402.000",
    },
  ]

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
  }
  return (
    <>
      <div className='slider-flashsale'>
        <Slider {...settings}>
          {dataFlashSale.map((item) => {
            return (
              <div className='slider-flashsale-wrap-all' key={item.id}>
                <NavLink
                  to={`/flashsale`}
                  key={item.id}
                  className='slider-flashsale-item'
                >
                  <div className='slider-flashsale-img'>
                    <img src={item.image} alt={item.context} />
                    <div className='slider-flashsale-img-context'>
                      <img src={item.context} alt='' />
                    </div>
                    <div className='slider-flashsale-img-sale'>
                      <p>{item.sale}</p>
                    </div>
                  </div>
                  <div className='slider-flashsale-price'>
                    <p>đ {item.price}</p>
                  </div>
                </NavLink>
              </div>
            )
          })}
        </Slider>
        <div className='slider-flashsale-banner'>
          <NavLink to={"/flashsale"}>
            <img src={flashsalebanner} alt='' />
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default FlashSaleContent
