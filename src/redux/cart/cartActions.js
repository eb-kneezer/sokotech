import actionTypes from "./cartActionTypes";

export const setCart = cart => ({
  type: actionTypes.SET_CART,
  payload: cart,
});

export const addToCart = product => ({
  type: actionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = product => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: product,
});

export const increaseQuantity = id => ({
  type: actionTypes.INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = id => ({
  type: actionTypes.DECREASE_QUANTITY,
  payload: id,
});
