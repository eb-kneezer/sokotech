import actionTypes from "./userActionTypes";

export const setAccount = (phoneNo) => ({
  type: actionTypes.SET_ACCOUNT,
  payload: phoneNo,
});

export const addOrder = (order) => ({
  type: actionTypes.ADD_ORDER,
  payload: order,
});

export const addAddress = (address) => ({
  type: actionTypes.ADD_ADDRESS,
  payload: address,
});

export const selectAddress = (phoneNo) => ({
  type: actionTypes.SELECT_ADDRESS,
  payload: phoneNo,
});
