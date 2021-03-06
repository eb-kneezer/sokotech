import actionTypes from "./productActionTypes";

const INITIAL_STATE = [];

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS: {
      const payloadCopy = JSON.parse(JSON.stringify(action.payload));
      return payloadCopy.map(prod => ({ ...prod, count: 1 }));
    }

    default:
      return state;
  }
};

export default productReducer;
