const ProductPrice = ({ price, selloff }) => {
  const calculateDiscountedPrice = (price, selloff) => {
    if (selloff === undefined) {
      return price
    }

    const discountPercentage = parseInt(selloff.replace("%", ""))
    const discountedPrice = price - price * (discountPercentage / 100)
    return discountedPrice.toFixed(2) // Giữ hai chữ số thập phân
  }

  const discountedPrice = calculateDiscountedPrice(price, selloff)

  return (
    <div>
      <p>{discountedPrice}</p>
    </div>
  )
}

export default ProductPrice
