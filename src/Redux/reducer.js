import { LOGIN, LOGOUT } from "./actions"

const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
}

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

export default reducer
