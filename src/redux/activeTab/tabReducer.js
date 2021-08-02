import actionTypes from "./tabActionTypes";

const INITIAL_STATE = "";

const TabReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVETAB:
      return action.payload;

    default:
      return state;
  }
};
export default TabReducer;
