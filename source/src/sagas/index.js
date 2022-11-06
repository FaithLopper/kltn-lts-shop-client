import { all } from "redux-saga/effects";
import category from "./category";
import product from "./product";
// import landing from "./landing"
const sagas = [
  // ...landing,
  ...category,
  ...product,
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
