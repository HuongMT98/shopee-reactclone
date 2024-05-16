// Initial state for the application
const initState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,

  renderCart: [
    { id: 1, name: "", price: "", image: "", discount: "", quatity: "" },
  ],
}

// Reducer function to handle state changes based on dispatched actions
function reducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true }
    case "LOGOUT":
      return { ...state, isLogin: false }
    // Adding items to the cart
    case "ADD_TO_CART":
      return { ...state, renderCart: [...state.renderCart, action.payload] }
    // Removing items from the cart
    case "REMOVE_TO_CART":
      return { ...state, renderCart: action.payload }
    // Clearing the cart
    case "CLEAR_CART":
      return { ...state, renderCart: [] }

    default:
      return state
  }
}

// Exporting the reducer function
export default reducer
