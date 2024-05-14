import { createStore } from "redux"
import reducer from "./reducer"
import { login, logout } from "./actions"

const store = createStore(reducer)

export { login, logout }
export default store
