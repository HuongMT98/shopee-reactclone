import { createSlice } from "@reduxjs/toolkit"

import ApiUser from "../Api/ApiUser"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: ApiUser.name,
    email: ApiUser.email,
    birthday: ApiUser.birthday,
    image: ApiUser.image,
    token: "",
    role: ApiUser.role,
    cart: [],
    wishlist: [],
    orders: [],
    address: ApiUser.address,
    notification: [],
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.age = action.payload.age
      state.image = action.payload.image
      state.token = action.payload.token
      state.role = action.payload.role
      state.notification = action.payload.notification
      state.address = action.payload.address
      state.cart = action.payload.cart
    },
    logout: (state) => {
      state.name = ""
      state.email = ""
      state.age = 0
      state.image = ""
      state.token = ""
      state.role = ""
    },
    addToCart: (state, action) => {
      state.cart = action.payload
    },
    updateUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.birthday = action.payload.birthday
      state.address = action.payload.address
      state.image = action.payload.image
    },
  },
})

export const { login, logout, addToCart, updateUser } = userSlice.actions
export default userSlice.reducer
