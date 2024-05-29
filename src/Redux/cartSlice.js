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
      state.renderCart.push(action.payload)
    },

    removeFromCart: (state, action) => {
      state.renderCart = state.renderCart.filter(
        (item) => item.id !== action.payload.id
      )
    },

    clearCart: (state) => {
      state.renderCart = []
    },

    updateQuantity: (state, action) => {
      state.renderCart = state.renderCart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity
        }
        return item
      })
    },
  },
})

export const {
  addToCart,
  renderCart,
  removeFromCart,
  clearCart,
  updateQuantity,
} = cartSlice.actions

export default cartSlice.reducer
