import { takeLatest, call, put } from "redux-saga/effects";
import { getCategory } from "../actions/category";
import apiConfig from "../constants/apiConfig";
import { sendRequest } from "../services/apiService";
import { setCategoryList } from "../reducers/category";

function* _getCategory({ payload: { params, onCompleted, onError } }) {
  try {
    let searchParams = {};
    // if (params.kind) {
    //   searchParams.kind = params.kind;
    // }
    // if (params.status) {
    //   searchParams.status = params.status;
    // }
    const { success, responseData } = yield call(
      sendRequest,
      apiConfig.productCategory.getAll,
      searchParams
    );
    if (success && responseData.result) {
      yield put(setCategoryList([...responseData.data]));
      onCompleted([...responseData.data]);
    } else onError(responseData);
  } catch (error) {
    onError(error);
  }
}

const sagas = [takeLatest(getCategory.type, _getCategory)];

export default sagas;
