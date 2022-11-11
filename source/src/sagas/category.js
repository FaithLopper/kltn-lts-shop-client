import { takeLatest, call, put } from "redux-saga/effects";
import apiConfig from "../constants/apiConfig";
import { sendRequest } from "../services/apiService";
import { actionTypes, reduxUtil } from "../actions/category";
import { handleApiResponse } from "../utils/apiHelper";
import Utils from "../utils";

const { checkAllAvailableParams } = Utils;
const { GET_CATEGORY_LIST } = actionTypes;
const { defineActionLoading, defineActionSuccess, defineActionFailed } =
  reduxUtil;

function* _getCategoryList({ payload: { params, onCompleted, onError } }) {
  const apiParams = apiConfig.productCategory.getAll;
  const searchParams = checkAllAvailableParams(params);
  try {
    const result = yield call(sendRequest, apiParams, searchParams);
    yield put({
      type: defineActionSuccess(GET_CATEGORY_LIST),
      categoryData: result.responseData && result.responseData.data,
    });
    handleApiResponse(result, onCompleted, onError);
  } catch (error) {
    yield put({ type: defineActionFailed(GET_CATEGORY_LIST) });
  }
}

const sagas = [
  takeLatest(defineActionLoading(GET_CATEGORY_LIST), _getCategoryList),
];

export default sagas;
