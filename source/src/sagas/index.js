import { all } from 'redux-saga/effects';
import categoryProduct from './categoryProduct'
// import landing from "./landing"
const sagas = [
    // ...landing,
    ...categoryProduct
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;
