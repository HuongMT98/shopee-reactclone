import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function BodyWrapItemContent() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(12)
  useEffect(() => {
    axios
      .get("http://localhost:5200/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleLoadMore = () => {
    setVisible(visible + 12)
  }

  return (
    <>
      <div className='bodywrapitem-container'>
        <div className='bodywrapitem'>
          {data.slice(0, visible).map((item) => (
            <Link key={item.id} className='bodywrapitem-item'>
              <img src={item.image} alt='' />
              <p className='bodywrapitem-item-name'>{item.name}</p>
              <div className='bodywrapitem-item-infosell'>
                <p className='bodywrapitem-item-price'>{item.price}</p>
                <p className='bodywrapitem-item-sold'>{item.sold} sold</p>
              </div>
            </Link>
          ))}
        </div>
        <div className='bodywrapitem-loadmore'>
          <button
            className='bodywrapitem-loadmore-btn'
            onClick={handleLoadMore}
          >
            See more
          </button>
        </div>
      </div>
    </>
  )
}

export default BodyWrapItemContent
