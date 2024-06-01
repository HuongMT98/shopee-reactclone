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
      const { id, quantity } = action.payload
      const existingItemIndex = state.renderCart.findIndex(
        (item) => item.id === id
      )

      if (existingItemIndex !== -1) {
        state.renderCart[existingItemIndex].quantity += quantity
      } else {
        state.renderCart.push(action.payload)
      }
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

    increateQuantityCart: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.renderCart.find((item) => item.id === id)
      if (item) {
        item.quantity = quantity + 1
        console.log(item)
      }
    },

    decreateQuantityCart: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.renderCart.find((item) => item.id === id)
      if (item) {
        item.quantity = quantity - 1
        console.log(item)
      }
    },

    // ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
  },
})

export const {
  addToCart,
  renderCart,
  removeFromCart,
  clearCart,
  increateQuantityCart,
  decreateQuantityCart,
} = cartSlice.actions

export default cartSlice.reducer
