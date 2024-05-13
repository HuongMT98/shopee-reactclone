const CalcSellofPrice = (price, selloff) => {
  if (selloff === undefined || typeof selloff !== "string") {
    return price
  }
  const discountPercentage = parseInt(selloff.replace("%", ""))
  const discountedPrice = price - price * (discountPercentage / 100)
  return discountedPrice.toFixed(2) // Giữ hai chữ số thập phân
}

export default CalcSellofPrice
