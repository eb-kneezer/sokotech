import actionTypes from "./userActionTypes";

const INITIAL_STATE = {
  isLoggedIn: false,
  account: "",
  orders: [],
  deliveryAddresses: [],
  selectedAddress: "",
  paymentMethod: {
    onDelivery: true,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ACCOUNT:
      return { ...state, account: action.payload };

    case actionTypes.ADD_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };

    case actionTypes.ADD_ADDRESS:
      return {
        ...state,
        deliveryAddresses: [...state.deliveryAddresses, action.payload],
      };

    case actionTypes.SELECT_ADDRESS:
      return { ...state, selectedAddress: action.payload };

    default:
      return state;
  }
};

export default userReducer;
