import { combineReducers } from "redux";
// import landing from './landing';
import category from "./category";
import product from "./product";

const rootReducer = combineReducers({
  category,
  product,
});

export default rootReducer;
