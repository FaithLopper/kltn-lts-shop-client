import apiConfig from '@constants/apiConfig';
import { sendRequest } from '@services/api';
import { handleApiResponse } from '@utils/apiHelper';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { addProduct } from '@store/actions/cart';
import { createSuccessActionType } from '@store/utils';
import useAuth from '@hooks/useAuth';
function* _addProduct({ payload: { product, userId, onCompleted, onError } }) {
    const getItems = (state) => state.cart.cartListData;
    console.log(userId);
    try {
        // console.log(product, onCompleted, onError);
        const itemsBefore = yield select(getItems);
        yield put({
            type: createSuccessActionType(addProduct.type),
            product: product,
        });
    } catch (error) {
        onError(error);
    }
}

const sagas = [ takeLatest(addProduct.type, _addProduct) ];

export default sagas;
