import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiProduct from "../../../../Api/ApiProduct"
import formatNumber from "../../../../untils/fomatNumber"

function BodyWrapItemContent() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(24)

  useEffect(() => {
    ApiProduct().then((data) => {
      setData(data)
    })
  }, [])

  const handleLoadMore = () => {
    setVisible((prevVisible) => prevVisible + 12)
  }

  return (
    <>
      <div className='bodywrapitem-container'>
        <div className='bodywrapitem'>
          {data.slice(0, visible).map((item) => (
            <Link
              key={item.id}
              className='bodywrapitem-item'
              to={`/product/${item.id}`}
            >
              <img src={item.image} alt='' />
              <p className='bodywrapitem-item-name'>{item.name}</p>
              <div className='bodywrapitem-item-infosell'>
                <p className='bodywrapitem-item-price'>
                  đ{formatNumber(item.price)}
                </p>
                <p className='bodywrapitem-item-sold'>{item.sold} sold</p>
              </div>
            </Link>
          ))}
        </div>
        {visible < data.length && (
          <div className='bodywrapitem-loadmore'>
            <button
              className='bodywrapitem-loadmore-btn'
              onClick={handleLoadMore}
            >
              See more
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default BodyWrapItemContent
