import "./FlashSalePage.scss"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons"
import imgFlashSale from "../../Assets/flashsale.png"
import Footer from "../../components/Layout/Footer/Footer"
import Nav from "../../components/Layout/Nav/Nav"
import ApiProduct from "../../Api/ApiProduct"
import StarRating from "../../untils/StarRating"
import ScrollToTop from "../../untils/ScrollToTop"
import formatNumber from "../../untils/fomatNumber"
import FlashSalePageCountdown from "./FlashSalePageCountdown/FlashSalePageCountdown"

function FlashSalePage() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(24)

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

  const handleLoadMore = () => {
    setVisible(visible + 24)
  }

  return (
    <>
      <Nav />
      <ScrollToTop />
      <div className='flashsalepage-container'>
        <div className='flashsalepage-countdown'>
          <div className='flashsalepage-countdown-wrap'>
            -----
            <img className='flashsalepage-img' src={imgFlashSale} alt='' />
            <h4 className='flashsalepage-title'>
              <FontAwesomeIcon icon={faClock} /> end in:
            </h4>
            <FlashSalePageCountdown />
            -----
          </div>
        </div>
        <div className='flashsalepage-wrap'>
          {data.slice(0, visible).map((item) => {
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
                    <p>{item.rating} reviews</p>
                    <div className='flashsalepage-price-wrap'>
                      <p className='flashsalepage-price'>
                        đ{formatNumber(item.price)}
                      </p>
                      <div className='flashsalepage-selloff-wrap'>
                        <FontAwesomeIcon icon={faBolt} />
                        <p className='flashsalepage-selloff'>
                          {item.discount}%
                        </p>
                      </div>
                    </div>
                    <div className='flashsalepage-selloff-price'>
                      {formatNumber(
                        Math.round(item.price * (1 - item.discount / 100))
                      )}
                    </div>
                    <button className='flashsalepage-btnbuy'>Buy Now</button>
                  </div>
                </NavLink>
              </div>
            )
          })}
        </div>
        {visible < data.length && (
          <button className='flashsalepage-btn' onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>

      <Footer />
    </>
  )
}

export default FlashSalePage
