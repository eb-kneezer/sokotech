import actionTypes from "./tabActionTypes";

export const setActiveTab = (tab) => ({
  type: actionTypes.SET_ACTIVETAB,
  payload: tab,
});
