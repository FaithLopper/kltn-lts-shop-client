import { all } from 'redux-saga/effects';
import categoryProduct from './categoryProduct'
import account from './account'
// import landing from "./landing"
const sagas = [
    // ...landing,
    ...categoryProduct,
    ...account,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;
