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
  },
})

export const { addToCart, renderCart } = cartSlice.actions
export default cartSlice.reducer
