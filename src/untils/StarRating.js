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

// Example usage:
console.log(RatingStar(3)) // Output: ★★★☆☆
console.log(RatingStar(4)) // Output: ★★★★☆
console.log(RatingStar(5)) // Output: ★★★★★

export default RatingStar
