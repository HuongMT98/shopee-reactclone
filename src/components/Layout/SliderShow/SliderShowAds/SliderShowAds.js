import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SliderShowAds() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5200/carouselbanner")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  })

  return (
    <>
      <div className='slider-ads-wrap'>
        <div className='slider-ads-container'>
          {data.map((item) => (
            <div className='slider-ads-content'>
              <Link to={`/vouchers`}>
                <img
                  className='slider-ads-img'
                  src={item.image}
                  alt={item.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SliderShowAds
