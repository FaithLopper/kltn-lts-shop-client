import apiConfig from '@constants/apiConfig';
import { sendRequest } from '@services/api';
import { handleApiResponse } from '@utils/apiHelper';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { addProduct, removeProduct } from '@store/actions/cart';
import { createSuccessActionType } from '@store/utils';
import useAuth from '@hooks/useAuth';
import { appCart } from '@constants';
import { getData, setData } from '@utils/localStorage';
import { showAppCartModal } from '@store/actions/app';
function* _addProduct({ payload: { product, userId, quantity, price, onCompleted, onError } }) {
    // if (userId) {
    //     if (!getData(`${appCart}-${userId}`))
    //         setData(`${appCart}-${userId}`, {
    //             cartListData: [],
    //             userData: null,
    //         });
    // }
    try {
        yield put({
            type: addProduct.success.type,
            product: product,
            userId: userId,
            quantity: quantity,
            price: price,
        });
    } catch (error) {
        onError(error);
    }
    try {
        yield put({
            type: showAppCartModal.type,
            product: product,
        });
        onCompleted();
    } catch (error) {
        onError(error);
    }
}

function* _removeProduct({ payload: { product } }) {
    try {
        yield put({
            type: createSuccessActionType(removeProduct.type),
            product: product,
            onCompleted: (cartData, userId) => {
                if (userId) setData(`${appCart}-${userId}`, cartData);
                else setData(appCart, cartData);
            },
        });
    } catch (error) {
        console.log(error);
    }
}

const sagas = [takeLatest(addProduct.type, _addProduct), takeLatest(removeProduct.type, _removeProduct)];

export default sagas;
