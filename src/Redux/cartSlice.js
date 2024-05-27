import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  renderCart: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    renderCart: (state, action) => {
      state.renderCart = action.payload
    },
    addToCart: (state, action) => {
      state.renderCart = action.payload
    },
    removeFromCart: (state, action) => {
      state.renderCart = state.renderCart.filter(
        (item) => item.id !== action.payload.id
      )
    },
    clearCart: (state) => {
      state.renderCart = []
    },
  },
})

export const { addToCart, renderCart, removeFromCart, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
