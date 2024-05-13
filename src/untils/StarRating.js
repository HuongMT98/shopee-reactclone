function RatingStar(rating) {
  const maxRating = 5
  let result = ""

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      result += "★" // Full star
    } else {
      result += "☆" // Empty star
    }
  }

  return result
}
export default RatingStar
