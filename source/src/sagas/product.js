import { call, put, takeEvery, takeLeading } from "redux-saga/effects";
import apiConfig from "../constants/apiConfig";
import { sendRequest } from "../services/apiService";
import Utils from "../utils";
import { handleApiResponse } from "../utils/apiHelper";
import { actionTypes, reduxUtil } from "../actions/product";

const { checkAllAvailableParams } = Utils;
const { GET_PRODUCT_LIST } = actionTypes;
const {
  defineActionLoading,
  defineActionSuccess,
  defineActionFailed,
  defineAction,
} = reduxUtil;

function* _getProductList({ payload: { params, onCompleted, onError } }) {
  const apiParams = apiConfig.product.getListByCategory;
  const searchParams = checkAllAvailableParams(params);

  if (params.categoryId) {
    searchParams.categoryId = params.categoryId;
  }
  console.log("vao saga", searchParams);
  try {
    // const result = yield call(sendRequest, apiParams, searchParams);
    // yield put({
    //   type: defineActionSuccess(GET_PRODUCT_LIST),
    //   // productData: result.responseData && result.responseData.data,
    //   productData: searchParams,
    // });
    // handleApiResponse(result, onCompleted, onError);
  } catch (error) {
    // yield put({ type: defineActionFailed(GET_PRODUCT_LIST) });
    console.log(error);
  }
}

const sagas = [
  takeLeading(defineActionLoading(GET_PRODUCT_LIST), _getProductList),
];

export default sagas;
