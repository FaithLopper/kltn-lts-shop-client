import { call, put, takeLatest } from 'redux-saga/effects';
import { productsActions } from '@store/actions';
import apiConfig from '@constants/apiConfig';
import { sendRequest } from '@services/api';
import { handleApiResponse } from '@utils/apiHelper';

const { getAllProductsAction } = productsActions;

function* getAllProducts({
    payload: {
        params = {},
        pathParams = {},
        data = {},
        onCompleted = () => {},
        onError = () => {},
        customReducerData = {},
    } = {},
}) {
    const apiParams = apiConfig.product.getAll;
    try {
        const result = yield call(sendRequest, apiParams, { params, data, pathParams });
        yield put({
            type: getAllProductsAction.success.type,
            payload: { ...result?.data, customReducerData } || {},
        });
        handleApiResponse(result, onCompleted);
    } catch (error) {
        console.log(error);
        yield put({
            type: getAllProductsAction.fail.type,
            payload: {},
        });
        handleApiResponse({}, () => {}, onError);
    }
}

const sagas = [ takeLatest(getAllProductsAction.type, getAllProducts) ];

export default sagas;
