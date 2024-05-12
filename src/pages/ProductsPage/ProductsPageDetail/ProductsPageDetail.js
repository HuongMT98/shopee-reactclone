import { useEffect, useState } from "react"
import ApiProduct from "../../../Api/ApiProduct"
import "./ProductsPageDetail.scss"

function ProductsPageDetail() {
  const [data, setData] = useState([])
  useEffect(() => {
    ApiProduct().then((data) => {
      setData(data)
    })
  }, [])
  return (
    <>
      <div className='products-page-detail'>
        {data.map((item) => (
          <div key={item.id}>
            <div className='products-page-detail-container'>
              <div className='products-page-detail-img-wrap'>
                <img
                  src={item.img}
                  alt=''
                  className='products-page-detail-img'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductsPageDetail
