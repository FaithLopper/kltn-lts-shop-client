import { call, put, takeEvery } from "redux-saga/effects";
import { getProduct } from "../actions/product";
import apiConfig from "../constants/apiConfig";
import { sendRequest } from "../services/apiService";
import { setProductList } from "../reducers/product";

function* _getProduct({ payload: { params, onCompleted, onError } }) {
  try {
    let searchParams = {};

    if (params.categoryId) {
      searchParams.categoryId = params.categoryId;
    }

    const { success, responseData } = yield call(
      sendRequest,
      apiConfig.product.getListByCategory,
      searchParams
    );
    if (success && responseData.result) {
      if (responseData.data) {
        yield put(setProductList(responseData.data));
        onCompleted(responseData.data);
      } else {
        // if no product found in that category
        yield put(setProductList([]));
        onCompleted([]);
      }
    } else onError(responseData);
  } catch (error) {
    onError(error);
  }
}

const sagas = [takeEvery(getProduct.type, _getProduct)];

export default sagas;
