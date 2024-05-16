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

export const updateCart = (data) => ({
  type: "UPDATE_CART",
  payload: data,
  total: data.reduce((acc, item) => acc + item.price * item.quantity, 0),
  quantity: data.reduce((acc, item) => acc + item.quantity, 0),
  totalQuantity: data.reduce((acc, item) => acc + item.quantity, 0),
  totalPrice: data.reduce((acc, item) => acc + item.price * item.quantity),
  totalDiscount: data.reduce(
    (acc, item) => acc + (item.price * item.quantity * item.discount) / 100,
    0
  ),
  totalDiscountPrice: data.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity -
      (item.price * item.quantity * item.discount) / 100,
    0
  ),
})

export const clearCart = () => ({ type: "CLEAR_CART" })

export const totalCart = () => ({ type: "TOTAL_CART" })
