const initState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,

  renderCart: [
    { id: 1, name: "", price: "", image: "", discount: "", quatity: "" },
  ],
}

function reducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true }
    case "LOGOUT":
      return { ...state, isLogin: false }
    // Thêm - Xóa cart
    case "ADD_TO_CART":
      return { ...state, renderCart: [...state.renderCart, action.payload] }
    case "REMOVE_TO_CART":
      return { ...state, renderCart: action.payload }

    default:
      return state
  }
}

export default reducer
