import { createStore } from "redux"
import reducer from "./reducer"
import {
  login,
  logout,
  addToCart,
  removeToCart,
  clearCart,
  updateCart,
  totalCart,
} from "./actions"

const store = createStore(reducer)

export {
  login,
  logout,
  addToCart,
  removeToCart,
  clearCart,
  updateCart,
  totalCart,
}
export default store
