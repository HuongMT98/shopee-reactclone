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

    // Thêm vào giỏ hàng
    addToCart: (state, action) => {
      state.renderCart.push(action.payload)
    },

    // Xóa sản phẩm ra khỏi giỏ hàng
    removeFromCart: (state, action) => {
      state.renderCart = state.renderCart.filter(
        (item) => item.id !== action.payload
      )
    },

    // Xóa bỏ toàn bộ sản phẩm ra khỏi giỏ hàng
    clearCart: (state) => {
      state.renderCart = []
    },

    // Cập nhật số lượng sản phẩm của giỏ hàng trong cart
    increateQuantity: (state, action) => {
      if (Array.isArray(state.item)) {
        state.item = state.item.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      }
    },

    //???????????????
  },
})

export const {
  addToCart,
  renderCart,
  removeFromCart,
  clearCart,
  increateQuantity,
} = cartSlice.actions

export default cartSlice.reducer
