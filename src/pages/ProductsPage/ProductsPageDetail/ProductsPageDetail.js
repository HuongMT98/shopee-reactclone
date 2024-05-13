import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ProductsPageDetail.scss"
import formatNumber from "../../../untils/fomatNumber"
import StarRating from "../../../untils/StarRating"
import CoundownFlashSale from "../../../components/Layout/FlashSale/CoundownFlashSale/CoundownFlashSale"

function ProductsPageDetail() {
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    const getProductDetail = async () => {
      const result = await fetch(`http://localhost:5200/products/${productId}`)
      const data = await result.json()
      console.log(data)
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
            <div>
              <p>{product.rating}</p>
              <p>{StarRating(product.rating)}</p>
            </div>
            <div className='products-page-detail-coundownwrap'>
              <div className='products-page-detail-coundown'>
                <p>Flash Sale</p>
                {CoundownFlashSale}
              </div>
              <h2 className='products-page-detail-price'>
                đ{formatNumber(product.price)}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductsPageDetail
