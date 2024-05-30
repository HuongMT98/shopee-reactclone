import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  renderCart: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    renderCart: (state, action) => {
      const newItems = action.payload
      const existingItems = state.renderCart

      // Combine items with the same ID and update the quantity
      const combinedItems = existingItems.map((existingItem) => {
        const newItem = newItems.find((item) => item.id === existingItem.id)
        if (newItem) {
          return {
            ...existingItem,
            quantity: existingItem.quantity + newItem.quantity,
          }
        }
        return existingItem
      })

      // Add new items that are not already in the cart
      const itemsToAdd = newItems.filter((newItem) => {
        return !existingItems.some(
          (existingItem) => existingItem.id === newItem.id
        )
      })
      const updatedItems = [...combinedItems, ...itemsToAdd]

      // Update the state with the combined and updated items
      state.renderCart = updatedItems
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
      if (state.renderCart) {
        state.renderCart.forEach((item) => {
          if (item.id === action.payload.id) {
            item.quantity = action.payload.quantity
          }
        })
      }
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
