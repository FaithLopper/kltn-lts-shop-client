import { combineReducers } from "redux";
import account from "./account";
// import landing from './landing';
import category from "./category";
import product from "./product";
import news from "./news";
const rootReducer = combineReducers({
  category: category.reducer,
  product : product.reducer,
  account: account.reducer,
  news: news.reducer,
  // landing: landing.reducer,
});

export default rootReducer;
