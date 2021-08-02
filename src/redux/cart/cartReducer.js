import actionTypes from "./cartActionTypes";

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return [...action.payload];

    case actionTypes.ADD_TO_CART: {
      if (state.some(item => item.id === action.payload.id)) {
        return [...state];
      }
      const payloadCopy = JSON.parse(JSON.stringify(action.payload));
      return [...state, payloadCopy];
    }

    case actionTypes.REMOVE_FROM_CART:
      const filteredCart = state.filter(item => item.id !== action.payload.id);
      return [...filteredCart];

    case actionTypes.INCREASE_QUANTITY: {
      const product = state.find(item => item.id === action.payload);
      product.count += 1;
      return [...state];
    }

    case actionTypes.DECREASE_QUANTITY: {
      const product = state.find(item => item.id === action.payload);
      product.count -= 1;
      return [...state];
    }

    default:
      return state;
  }
};

export default cartReducer;
