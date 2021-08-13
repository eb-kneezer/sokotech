import actionTypes from "./cartActionTypes";

const INITIAL_STATE = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      localStorage.setItem("cart", JSON.stringify([...action.payload]));
      return [...action.payload];

    case actionTypes.ADD_TO_CART: {
      if (state.some(item => item.id === action.payload.id)) {
        localStorage.setItem("cart", JSON.stringify([...state]));
        return [...state];
      }
      const payloadCopy = JSON.parse(JSON.stringify(action.payload));
      localStorage.setItem("cart", JSON.stringify([...state, payloadCopy]));
      return [...state, payloadCopy];
    }

    case actionTypes.REMOVE_FROM_CART:
      const filteredCart = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify([...filteredCart]));
      return [...filteredCart];

    case actionTypes.INCREASE_QUANTITY: {
      const product = state.find(item => item.id === action.payload);
      product.count += 1;
      localStorage.setItem("cart", JSON.stringify([...state]));
      return [...state];
    }

    case actionTypes.DECREASE_QUANTITY: {
      const product = state.find(item => item.id === action.payload);
      product.count -= 1;
      localStorage.setItem("cart", JSON.stringify([...state]));
      return [...state];
    }

    default:
      return state;
  }
};

export default cartReducer;
