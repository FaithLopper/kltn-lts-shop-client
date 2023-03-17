import { call, put, takeLatest } from 'redux-saga/effects';
import { categoriesActions } from '@store/actions';
import apiConfig from '@constants/apiConfig';
import { sendRequest } from '@services/api';
import { handleApiResponse } from '@utils/apiHelper';

const { getAllProductCategoriesAction } = categoriesActions;

function* getAllProductCategories({
    payload: {
        params = {},
        pathParams = {},
        data = {},
        onCompleted = () => {},
        onError = () => {},
        customReducerData = {},
    } = {},
}) {
    const apiParams = apiConfig.productCategories.getAll;
    try {
        const result = yield call(sendRequest, apiParams, { params, data, pathParams });
        yield put({
            type: getAllProductCategoriesAction.success.type,
            payload: { ...result?.data, customReducerData } || {},
        });
        handleApiResponse(result, onCompleted);
    } catch (error) {
        console.log(error);
        yield put({
            type: getAllProductCategoriesAction.fail.type,
            payload: {},
        });
        handleApiResponse({}, () => {}, onError);
    }
}

const sagas = [ takeLatest(getAllProductCategoriesAction.type, getAllProductCategories) ];

export default sagas;
