import { call, put, takeEvery } from 'redux-saga/effects';
import { landingActions } from '@store/actions';
import apiConfig from '@constants/apiConfig';
import { sendRequest } from '@services/api';
import { handleApiResponse } from '@utils/apiHelper';

const { getProdsPerCategoriesAction } = landingActions;

function* getProdsPerCategories({
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
            type: getProdsPerCategoriesAction.success.type,
            payload: { ...result?.data, customReducerData } || {},
        });
        handleApiResponse(result, onCompleted);
    } catch (error) {
        console.log(error);
        yield put({
            type: getProdsPerCategoriesAction.fail.type,
            payload: {},
        });
        handleApiResponse({}, () => {}, onError);
    }
}

const sagas = [ takeEvery(getProdsPerCategoriesAction.type, getProdsPerCategories) ];

export default sagas;
