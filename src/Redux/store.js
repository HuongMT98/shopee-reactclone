import { createStore } from "redux"
import reducer from "./reducer"
import {
  login,
  logout,
  addToCart,
  removeToCart,
  clearCart,
  updateCart,
} from "./actions"

const store = createStore(reducer)

export { login, logout, addToCart, removeToCart, clearCart, updateCart }
export default store
