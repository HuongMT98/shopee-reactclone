function formatNumber(number) {
  // Chuyển số thành chuỗi
  const str = String(number)

  // Kiểm tra xem số có ít hơn 3 chữ số không
  if (str.length <= 3) {
    return str
  }

  // Nếu có, đặt dấu chấm phân cách sau mỗi 3 chữ số
  let result = ""
  let count = 0
  for (let i = str.length - 1; i >= 0; i--) {
    count++
    result = str[i] + result
    if (count % 3 === 0 && i !== 0) {
      result = "." + result
    }
  }

  return result
}
export default formatNumber
