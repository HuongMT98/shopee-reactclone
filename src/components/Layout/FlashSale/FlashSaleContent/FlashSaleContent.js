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
import Slider from "react-slick"

function FlashSaleContent() {
  const dataFlashSale = [
    {
      id: 1,
      image: img1,
      context: img1a,
      sale: "-22%",
      price: 139000,
    },
    {
      id: 2,
      image: img2,
      context: img2a,
      sale: "-45%",
      price: 71000,
    },
    {
      id: 3,
      image: img3,
      context: img3a,
      sale: "-9%",
      price: 1047000,
    },
    {
      id: 4,
      image: img4,
      context: img4a,
      sale: "-37%",
      price: 2018000,
    },
    {
      id: 5,
      image: img5,
      context: img5a,
      sale: "-20%",
      price: 716000,
    },
    {
      id: 6,
      image: img6,
      context: img6a,
      sale: "-60%",
      price: 404000,
    },
    {
      id: 7,
      image: img7,
      context: img7a,
      sale: "-44%",
      price: 419000,
    },
    {
      id: 8,
      image: img8,
      context: img8a,
      sale: "-55%",
      price: 149000,
    },
    {
      id: 9,
      image: img9,
      context: img9a,
      sale: "-25%",
      price: 278000,
    },
    {
      id: 10,
      image: img10,
      context: img10a,
      sale: "-44%",
      price: 100000,
    },
    {
      id: 11,
      image: img11,
      context: img11a,
      sale: "-43%",
      price: 200000,
    },
    {
      id: 12,
      image: img12,
      context: img12a,
      sale: "-53%",
      price: 220000,
    },
    {
      id: 13,
      image: img13,
      context: img13a,
      sale: "-64%",
      price: 19000,
    },
    {
      id: 14,
      image: img14,
      context: img14a,
      sale: "-64%",
      price: 277900,
    },
    {
      id: 15,
      image: img15,
      context: img15a,
      sale: "-61%",
      price: 13500,
    },
    {
      id: 16,
      image: img16,
      context: img16a,
      sale: "-61%",
      price: 402000,
    },
  ]

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
  }
  return (
    <>
      <div>
        <Slider {...settings}>
          {dataFlashSale.map((item) => {
            return (
              <div className='slider-flashsale-wrap-all' key={item.id}>
                <div className='slider-flashsale-content'>
                  <div className='slider-flashsale-img'>
                    <img src={item.image} alt={item.context} />
                    <div>
                      <img src={item.context} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default FlashSaleContent
