import { Link } from "react-router-dom"
import "../../NavCart/NavCart.scss"
import "./CartItem.scss"
import formatNumber from "../../../../../../untils/fomatNumber"
import imgEmty from "../../../../../../Assets/emtycart.png"
import { useEffect, useState } from "react"
import ApiProduct from "../../../../../../Api/ApiProduct"

function CartItem() {
  const [cartItem, setCartItem] = useState([])
  useEffect(() => {
    ApiProduct().then((data) => {
      setCartItem(data)
    })
  }, [])

  // Remove duplicates from cart items based on ID
  const uniqueCartItems = Array.from(
    new Set(cartItem.map((item) => item.id))
  ).map((id) => cartItem.find((item) => item.id === id))

  return (
    <div className='cart-item-wrap'>
      {uniqueCartItems.length === 0 && (
        <div className='emty-cart'>
          <div className='emty-cart-wrap'>
            <img src={imgEmty} alt='' className='emty-cart-img' />
            <p>No Products Yet</p>
          </div>
        </div>
      )}
      {uniqueCartItems.length > 0 && (
        <>
          <div className='title-cart'>
            <p>Recently Added Products</p>
          </div>
          <div className='detail'>
            <div className='detail-wrap'>
              {uniqueCartItems.map((item) => {
                return (
                  <Link key={item.id} to={`/product/${item.id}`}>
                    <div className='detail-item'>
                      <div className='img'>
                        <img src={item.image} alt='' />
                      </div>
                      <div className='name'>
                        <p>{item.name}</p>
                      </div>
                      <div className='price'>
                        <p>{formatNumber(item.price)}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
              <div className='add-to-cart'>
                <Link to={"/cart"}>
                  <button className='btn-cart'>view my shopping cart</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartItem
