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
        setData(response)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    gap: 10,
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
                  <p>đ{formatNumber(item.price)}</p>
                </div>
                <div className='slider-flashsale-selloff'>
                  <p>
                    <FontAwesomeIcon icon={faBolt} />
                    {item.selloff}
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
