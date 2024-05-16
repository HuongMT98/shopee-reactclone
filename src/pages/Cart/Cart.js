import { useDispatch, useSelector } from "react-redux"
import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import "./Cart.scss"
import NavTopOnly from "../../components/Layout/NavTopOnly/NavTopOnly"
import formatNumber from "../../untils/fomatNumber"
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ApiProduct from "../../Api/ApiProduct"

function Cart() {
  const renderCart = useSelector((state) => state.renderCart)
  const dispatch = useDispatch()
  const [valueQuantity, setValueQuantity] = useState(
    renderCart.length > 0 ? renderCart[0].quantity : 1
  )

  const { getInputProps } = useNumberInput({
    step: 1,
    defaultValue: valueQuantity,
    min: 1,
    max: 99,
    precision: 1,
  })

  const input = getInputProps({
    value: valueQuantity,
    onChange: (e) => setValueQuantity(Number(e.target.value)),
  })

  const handleIncrement = (e) => {
    e.preventDefault()
    setValueQuantity(valueQuantity + 1)
  }

  const handleDecrement = (e) => {
    e.preventDefault()
    setValueQuantity(valueQuantity - 1)
  }

  const handleRemove = (e, itemId) => {
    e.preventDefault()
    const updateCart = renderCart.filter((item) => item.id !== itemId)
    dispatch({ type: "REMOVE_TO_CART", payload: updateCart })
  }

  const handleClear = (e) => {
    e.preventDefault()
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <>
      <NavTopOnly />
      <div className='cart-container'>
        <div className='cart-container-wrap'>
          {renderCart.map((item) => (
            <div key={item.id} className='cart-product-wrap'>
              <div className='cart-product-item'>
                <div className='cart-product-left'>
                  <div className='cart-product-img'>
                    <img src={item.image} alt='' />
                  </div>
                  <div className='cart-product-name'>{item.name}</div>
                </div>
                <div className='cart-product-right'>
                  <div className='cart-product-price'>
                    đ{formatNumber(item.price)}
                  </div>
                  <div className='cart-product-quantity'>
                    <HStack maxW='320px'>
                      <Button onClick={handleDecrement}>-</Button>
                      <Input {...input} value={valueQuantity} />
                      <Button onClick={handleIncrement}>+</Button>
                    </HStack>
                  </div>
                  <div className='cart-product-totalprice'>
                    đ{formatNumber(valueQuantity * item.price)}
                  </div>
                </div>
              </div>
              <button
                className='btn-cart'
                onClick={(e) => handleRemove(e, item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          {renderCart.length > 0 && (
            <button className='btn-cart-clear' onClick={handleClear}>
              Clear cart
            </button>
          )}
        </div>
      </div>
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Cart
