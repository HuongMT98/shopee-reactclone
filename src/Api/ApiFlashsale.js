const API_URL = "http://localhost:5200/flashsale"

async function ApiFlashsale() {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("There was an error!", error)
    return []
  }
}

export default ApiFlashsale
