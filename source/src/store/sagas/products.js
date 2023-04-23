import { call, put, takeLatest } from 'redux-saga/effects';
import { productsActions } from '@store/actions';
import apiConfig from '@constants/apiConfig';
import { sendRequest } from '@services/api';
import { handleApiResponse } from '@utils/apiHelper';
import { all } from 'axios';
import { ProductConfigKinds } from '@constants';

const { getAllProductsAction, getAllProductsFilterAction } = productsActions;

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

function* getAllProductsFilter({
    payload: { params = {}, pathParams = {}, data = {}, onCompleted = () => {}, onError = () => {} } = {},
}) {
    try {
        let categories = [];
        if (params.categoriesId) {
            categories.push({ id: params.categoriesId });
        } else {
            const {
                data: { data: categoriesArr },
            } = yield call(sendRequest, apiConfig.productCategories.getAll, {});
            categories = categoriesArr;
        }

        const productPromises = categories.map(async (item) => {
            const {
                data: { data: product },
            } = await sendRequest(apiConfig.product.getAll, { params: { categoryIds: item.id } });
            return product;
        });

        const productsSinglePromises = [...(yield Promise.all(productPromises))].filter((item) => {
            if (item) return item;
            return false;
        });

        let products = [];
        [...(yield Promise.all(productsSinglePromises))].map((arr) => {
            arr.map((prod) => {
                products.push(prod);
            });
        });

        const allProductPromise = products.map(async (prod) => {
            if (prod.kind === ProductConfigKinds.MULTI_CHOICE) {
                const {
                    data: { data: product },
                } = await sendRequest(apiConfig.product.getAll, {
                    params: { parentProduct: prod.id, name: params.name },
                });
                return product;
            }
            return prod;
        });

        let allProduct = [];
        [...(yield Promise.all(allProductPromise))].map((item) => {
            if (item) {
                if (Array.isArray(item))
                    item.map((prod) => {
                        allProduct.push(prod);
                    });
                else allProduct.push(item);
            }
        });

        const filterProducts = params.name
            ? allProduct.filter((item) => item.name.toLowerCase() == params.name.toLowerCase())
            : allProduct;
        yield put({
            type: getAllProductsFilterAction.success.type,
            payload: { data: filterProducts } || {},
        });

        onCompleted(allProduct);
    } catch (err) {
        console.log(err);
    }
}

const sagas = [
    takeLatest(getAllProductsAction.type, getAllProducts),
    takeLatest(getAllProductsFilterAction.type, getAllProductsFilter),
];

export default sagas;
