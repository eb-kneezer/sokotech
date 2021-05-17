import actionTypes from "./productActionTypes";

export const getProducts = (products) => ({
  type: actionTypes.GET_PRODUCTS,
  payload: products,
});
