import Slider from "react-slick"
import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from "react"
import flashsalebanner from "../../../../Assets/FlashSale/flashsalebanner.png"
import formatNumber from "../../../../untils/fomatNumber"
import "./FlashSaleContent.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import ApiProduct from "../../../../Api/ApiProduct"

function FlashSaleContent() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(16)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ApiProduct()
        setData(response.sort(() => Math.random() - 0.5))
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  //dùng data để render UI

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    gap: 10,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          gap: 10,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className='slider-flashsale'>
        <Slider {...settings}>
          {data.slice(0, visible).map((item) => (
            <div key={item.id} className='slider-flashsale-item'>
              <NavLink to={`/flashsale`}>
                <div className='slider-flashsale-img'>
                  <img src={item.image} alt='' />
                </div>
                <div className='slider-flashsale-price'>
                  <p>
                    đ
                    {formatNumber(
                      Math.round(item.price * (1 - item.discount / 100))
                    )}
                  </p>
                </div>
                <div className='slider-flashsale-selloff'>
                  <p>
                    <FontAwesomeIcon icon={faBolt} />
                    {item.discount}%
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
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
