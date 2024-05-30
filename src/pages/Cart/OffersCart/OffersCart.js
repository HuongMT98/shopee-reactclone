import React, { useEffect, useState } from "react"
import "./OffersCart.scss"
import { IoIosArrowForward } from "react-icons/io"
import ApiProduct from "../../../Api/ApiProduct"
import { NavLink, useNavigate } from "react-router-dom"
import formatNumber from "../../../untils/fomatNumber"

export default function OffersCart() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(12)
  const navigate = useNavigate()

  useEffect(() => {
    ApiProduct()
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  const handleLoadMore = () => {
    navigate("/flashsale")
  }

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
  return (
    <>
      <div className='offers-cart-container'>
        <div className='offers-cart-wrap'>
          <div className='offers-cart-title'>
            <div className='offers-cart-title-see'>
              <p>you may also like</p>
            </div>
            <div className='offers-cart-title-btn'>
              <button className='offers-cart-btn' onClick={handleLoadMore}>
                See all <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className='offers-cart-items'>
            {data.slice(0, visible).map((item) => {
              return (
                <div key={item.id} className='offers-cart-item'>
                  <NavLink
                    className='offers-cart-item-link'
                    to={`/product/${item.id}`}
                  >
                    <div className='offers-cart-view'>
                      <img
                        src={item.image}
                        alt=''
                        className='offers-cart-img'
                      />
                      <p className='offers-cart-discount'>{item.discount}%</p>
                    </div>
                    <p className='offers-cart-name'>{item.name}</p>
                    <div className='offers-cart-total-price'>
                      <p className='offers-cart-price'>
                        đ
                        {formatNumber(
                          Math.round(item.price * (1 - item.discount / 100))
                        )}
                      </p>
                      <p className='offers-cart-sold'>{item.sold} sold</p>
                    </div>
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
