export const login = () => ({ type: "LOGIN" })
export const logout = () => ({ type: "LOGOUT" })

export const addToCart = (data) => ({
  type: "ADD_TO_CART",
  payload: data,
})
export const removeToCart = (data) => ({
  type: "REMOVE_TO_CART",
  payload: data,
})
