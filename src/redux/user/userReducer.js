import actionTypes from "./userActionTypes";

const INITIAL_STATE = localStorage.getItem("sokoUser")
  ? JSON.parse(localStorage.getItem("sokoUser"))
  : {
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
      localStorage.setItem(
        "sokoUser",
        JSON.stringify({ ...state, account: action.payload })
      );
      return { ...state, account: action.payload };

    case actionTypes.ADD_ORDER:
      localStorage.setItem(
        "sokoUser",
        JSON.stringify({ ...state, orders: [...state.orders, action.payload] })
      );
      return { ...state, orders: [...state.orders, action.payload] };

    case actionTypes.ADD_ADDRESS:
      localStorage.setItem(
        "sokoUser",
        JSON.stringify({
          ...state,
          deliveryAddresses: [...state.deliveryAddresses, action.payload],
        })
      );
      return {
        ...state,
        deliveryAddresses: [...state.deliveryAddresses, action.payload],
      };

    case actionTypes.SELECT_ADDRESS:
      localStorage.setItem(
        "sokoUser",
        JSON.stringify({ ...state, selectedAddress: action.payload })
      );
      return { ...state, selectedAddress: action.payload };

    default:
      return state;
  }
};

export default userReducer;
