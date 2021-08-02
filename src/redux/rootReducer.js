import { combineReducers } from "redux";
import tabReducer from "./activeTab/tabReducer";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";

export default combineReducers({
  activeTab: tabReducer,
  user: userReducer,
  cart: cartReducer,
  products: productReducer,
});
