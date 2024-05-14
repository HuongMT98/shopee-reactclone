import { createStore } from "redux"

// Define the initial state
const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
}

// Define the action types
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

// Define the action creators
export const login = () => ({ type: LOGIN })
export const logout = () => ({ type: LOGOUT })

// Define the reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true }
    case LOGOUT:
      return { ...state, isLogin: false }
    default:
      return state
  }
}

// Create the Redux store
const store = createStore(reducer)

export default store
