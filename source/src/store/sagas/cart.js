import { put, select, takeLatest } from 'redux-saga/effects';
import { cartActions } from '@store/actions';
import { processAction } from '@store/utils';
import apiConfig from '@constants/apiConfig';

function* addItemCart({ payload: { params, onCompleted, onError } }) {
    const getItems = (state) => state.cart.cartListData;
    // console.log(params);
    try {
        // const itemsBefore = yield select(getItems);
        yield put({
            type: cartActions.addProduct.type,
            product: params.product,
        });
        // const items = yield select(getItems);
        // localStorage.setItem('cartItems', JSON.stringify(items));
        // if (itemsBefore.length !== items.length) {
        //     onCompleted(params.product);
        // }
    } catch (error) {
        onError(error);
    }
}

const sagas = [ takeLatest(cartActions.addProduct.type, addItemCart) ];

export default sagas;
