import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isLogin = false
      state.user = {}
    },
  },
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
