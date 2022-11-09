import { all } from "redux-saga/effects";
import category from "./category";
import product from "./product";
import account from './account'
import news from './news';
// import landing from "./landing"
const sagas = [
  // ...landing,
  ...category,
  ...product,
  ...account,
  ...news,
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
