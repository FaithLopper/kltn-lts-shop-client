import { all } from "redux-saga/effects";
import category from "./category";
import product from "./product";
import account from './account'
import news from './news';
import cart from './cart';
// import landing from "./landing"
const sagas = [
  // ...landing,
  ...category,
  ...product,
  ...account,
  ...news,
  ...cart,
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
