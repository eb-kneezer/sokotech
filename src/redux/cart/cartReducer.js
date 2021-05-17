import actionTypes from "./cartActionTypes";

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return action.payload;
    case actionTypes.ADD_TO_CART:
      return [...state, action.payload];

    case actionTypes.REMOVE_FROM_CART:
      const filteredCart = state.filter(
        (item) => item.id !== action.payload.id
      );
      return filteredCart;

    default:
      return state;
  }
};

export default cartReducer;
