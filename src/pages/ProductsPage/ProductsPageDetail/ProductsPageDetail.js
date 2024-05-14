import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import "./ProductsPageDetail.scss"
import "./ProductsPageDetail.responsive.scss"
import formatNumber from "../../../untils/fomatNumber"
import StarRating from "../../../untils/StarRating"
import CoundownFlashSale from "../../../components/Layout/FlashSale/CoundownFlashSale/CoundownFlashSale"
import Tippy from "@tippyjs/react"
import VoucherRender from "../VoucherRender/VoucherRender"
import HelpShipping from "./HelpShipping/HelpShipping"
import GetLocation from "../../../untils/GetLocation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons/faCartFlatbed"
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck"
import NumberInputQuatity from "../../../untils/NumberInputQuatity"

function ProductsPageDetail() {
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    const getProductDetail = async () => {
      const result = await fetch(`http://localhost:5200/products/${productId}`)
      const data = await result.json()
      setProduct(data)
    }
    getProductDetail()
  }, [productId])

  if (Object.keys(product).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className='products-page-detail'>
      <div className='products-page-detail-container'>
        <div className='products-page-detail-wrap'>
          <div className='products-page-detail-img'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='products-page-detail-info'>
            <h5 className='products-page-detail-name'>{product.name}</h5>
            <div className='products-page-detail-rating'>
              <div className='products-page-detail-rating-wrap'>
                <p className='products-page-detail-rating-text'>
                  {product.rating}
                </p>
                <p className='products-page-detail-rating-star'>
                  {StarRating(product.rating)}
                </p>
              </div>
              <div className='products-page-detail-report'>
                <NavLink>Report</NavLink>
              </div>
            </div>
            <div className='products-page-detail-coundownwrap'>
              <div className='products-page-detail-coundown'>
                <p className='products-page-detail-coundown-text'>
                  F<FontAwesomeIcon icon={faBolt} />
                  ASH SALE
                </p>
                <CoundownFlashSale />
              </div>
              <div className='products-page-detail-price-wrap'>
                <h2 className='products-page-detail-price-old'>
                  đ{formatNumber(product.price)}
                </h2>
                <h2 className='products-page-detail-price-new'>
                  đ
                  {formatNumber(
                    Math.round(product.price * (1 - product.discount / 100))
                  )}
                  <div className='price-new-discount'>
                    {product.discount > 0 ? (
                      <span className='discount'>{product.discount}% OFF</span>
                    ) : null}
                  </div>
                </h2>
              </div>
            </div>
            <div className='products-page-detail-voucher'>
              <div className='products-page-detail-voucher-wrap'>
                <Tippy content=<VoucherRender /> placement='bottom' interactive>
                  <h4 className='voucher-text'>Shop Vouchers</h4>
                </Tippy>
                <div className='voucher-percent'>
                  <p className='voucher-percent-detail'>25k</p>
                  <p className='voucher-percent-detail'>10%</p>
                  <p className='voucher-percent-detail'>10%</p>
                </div>
              </div>
            </div>
            <div className='products-page-detail-addon'>
              <div className='products-page-detail-addon-wrap'>
                <div className='products-page-detail-addon-title'>
                  <h4 className='addon-title'>Add-On</h4>
                </div>
                <div className='products-page-detail-addon-text'>
                  <p className='addon-text'>Free Gift</p>
                </div>
              </div>
            </div>
            <div className='products-page-detail-shipping'>
              <div className='products-page-detail-shipping-wrap'>
                <div className='shipping-title'>Shipping</div>
                <div className='shipping-text'>
                  <div className='shipping-info'>
                    <FontAwesomeIcon
                      icon={faCartFlatbed}
                      className='shipping-icon'
                    />
                    Fulfilled by Shopee
                    <Tippy
                      content=<HelpShipping />
                      placement='bottom'
                      interactive
                    >
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className='question'
                      />
                    </Tippy>
                  </div>
                  <div className='shipping-location'>
                    <div className='shipping-location-wrap'>
                      <FontAwesomeIcon
                        icon={faTruck}
                        className='shipping-icon'
                      />
                      <p className='shipping-location-text'>Shipping to</p>
                      <GetLocation />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='products-page-detail-quatity'>
              <p className='quatity'>Quantity</p>
              <div className='quatity-wrap'>
                <NumberInputQuatity />
              </div>
            </div>
            <div className='products-page-detail-btn-wrap'>
              <button className='products-page-detail-btn btn-cart'>
                Add to cart
              </button>
              <button className='products-page-detail-btn btn-buy'>
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductsPageDetail
