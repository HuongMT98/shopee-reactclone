import { createStore } from "redux"
import reducer from "./reducer"
import { login, logout, addToCart, removeToCart, clearCart } from "./actions"

const store = createStore(reducer)

export { login, logout, addToCart, removeToCart, clearCart }
export default store
