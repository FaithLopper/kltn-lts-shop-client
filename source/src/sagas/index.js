import { all } from 'redux-saga/effects';

// import landing from "./landing"
const sagas = [
    // ...landing,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;
