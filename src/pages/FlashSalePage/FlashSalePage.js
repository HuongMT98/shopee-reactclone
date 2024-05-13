import Footer from "../../components/Layout/Footer/Footer"
import "./FlashSalePage.scss"
import Nav from "../../components/Layout/Nav/Nav"
import ApiProduct from "../../Api/ApiProduct"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import StarRating from "../../untils/StarRating"
import ScrollToTop from "../../untils/ScrollToTop"
import formatNumber from "../../untils/fomatNumber"

function FlashSalePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    ApiProduct().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <>
      <Nav />
      <ScrollToTop />
      <div className='flashsalepage-container'>
        <div className='flashsalepage-wrap'>
          {data.map((item) => {
            return (
              <div className='flashsalepage-item' key={item.id}>
                <NavLink to={`/product/${item.id}`}>
                  <div className='flashsalepage-img-wrap'>
                    <img
                      className='flashsalepage-img'
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className='flashsalepage-info'>
                    <p className='flashsalepage-name'>{item.name}</p>
                    <p className='flashsalepage-rating'>
                      {StarRating(item.rating)}
                    </p>
                    <div className='flashsalepage-price-wrap'>
                      <p className='flashsalepage-price'>
                        đ{formatNumber(item.price)}
                      </p>
                      <div className='flashsalepage-selloff-wrap'>
                        <FontAwesomeIcon icon={faBolt} />
                        <p className='flashsalepage-selloff'>{item.selloff}</p>
                      </div>
                    </div>
                    <div className='flashsalepage-selloff-price'>
                      đ{formatNumber(item.price)}
                    </div>
                  </div>
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FlashSalePage
