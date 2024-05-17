import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import loginReducer from "./loginSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
  },
})
