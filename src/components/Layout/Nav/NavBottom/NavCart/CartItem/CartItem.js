import { Link } from "react-router-dom"
import "../../NavCart/NavCart.scss"
import "./CartItem.scss"
import formatNumber from "../../../../../../untils/fomatNumber"
import imgEmty from "../../../../../../Assets/emtycart.png"
import { useEffect, useState } from "react"
import ApiProduct from "../../../../../../Api/ApiProduct"
import { useSelector } from "react-redux"

function CartItem() {
  // Gọi Api để lấy dữ liệu
  const [cartItem, setCartItem] = useState([])
  const [visible, setVisible] = useState(6)

  useEffect(() => {
    ApiProduct().then((data) => {
      setCartItem(data)
    })
  }, [])

  // Trạng thái đăng nhập của người dùng từ Redux
  const isLoginState = useSelector((state) => state.login.isLoggedIn)

  // Nếu trùng ID, sản phẩm sẽ gộp thành 1
  const cartItemUnique = Array.from(
    new Set(cartItem.map((item) => item.id))
  ).map((id) => cartItem.find((item) => item.id === id))

  console.log(cartItemUnique)

  return (
    <div className='cart-item-wrap'>
      {isLoginState === false && (
        <div className='emty-cart'>
          <div className='emty-cart-wrap'>
            <img src={imgEmty} alt='' className='emty-cart-img' />
            <p>No Products Yet</p>
          </div>
        </div>
      )}
      {isLoginState === true && cartItemUnique.length > 0 && (
        <>
          <div className='title-cart'>
            <p>Recently Added Products</p>
          </div>
          <div className='detail'>
            <div className='detail-wrap'>
              {cartItemUnique.slice(0, visible).map((item) => {
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
              {cartItemUnique.length > visible && (
                <p>See all: {cartItemUnique.length} products in your cart</p>
              )}
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
