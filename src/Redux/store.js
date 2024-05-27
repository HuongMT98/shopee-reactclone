import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import loginReducer from "./loginSlice"
import cartSlice from "./cartSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    cart: cartSlice,
  },
})
