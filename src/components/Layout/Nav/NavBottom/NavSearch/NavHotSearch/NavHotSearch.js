import { useEffect, useState } from "react"
import ApiHotSearch from "../../../../../../Api/ApiHotSearch"
import "./NavHotSearch.scss"
import { Link } from "react-router-dom"

function NavHotSearch() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ApiHotSearch().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <div className='nav-hot-search'>
        <div className='nav-hot-search-item'>
          {products.map((product) => (
            <div key={product.id}>
              <Link>{product.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default NavHotSearch
