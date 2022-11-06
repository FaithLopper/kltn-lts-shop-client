import { combineReducers } from 'redux';
import account from './account';
// import landing from './landing';
import category from "./category";
import product from "./product";

const rootReducer = combineReducers({
  category,
  product,
  account: account.reducer,
    // landing: landing.reducer,
});

export default rootReducer;
