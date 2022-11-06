import { takeLatest, call, put, all } from "redux-saga/effects";
import { getAllCategoryProduct, getAllNew } from "../actions/appCommon";
import apiConfig from "../constants/apiConfig";
import { sendRequest } from "../services/apiService";
import { setCategoryProduct, setNew } from "../reducers/appCommon";

function* _getCategoryProduct({ payload: { params, onCompleted, onError } }) {
  try {
    let searchParams = {};
    if (params.kind) {
      searchParams.kind = params.kind;
    }
    if (params.status) {
      searchParams.status = params.status;
    }
    const { success, responseData } = yield call(
      sendRequest,
      apiConfig.productCategory.getAll,
      searchParams
    );
    if (success && responseData.result) {
      const categoryList = responseData.data;
      const data = yield all(
        [...categoryList].map((param) =>
          call(sendRequest, {
            ...apiConfig.product.getListByCategory,
            path: `${apiConfig.product.getListByCategory.path}?categoryId=${param.id}`,
          })
        )
      );
      let productsData = [];
      data.map(
        ({ responseData }) =>
          responseData.data && productsData.push(responseData.data)
      );

      yield put(
        setCategoryProduct({
          data: productsData,
        })
      );
      onCompleted(productsData);
    } else onError(responseData);
  } catch (error) {
    onError(error);
  }
}

function* _getNew({ payload: { params, onCompleted, onError } }) {
  const apiParams = apiConfig.new.getNew;
  const searchParams = { page: params.page, size: params.size };
  searchParams.kind = 1;
  try {
    const result = yield call(sendRequest, apiParams, searchParams);
    console.log(result);
    // yield put(
    //   setNew({
    //     data: {
    //       ...result.responseData.data,
    //     },
    //   })
    // );
    // onCompleted(result.responseData)
  } catch (error) {
    onError(error);
  }
}

const sagas = [
  takeLatest(getAllCategoryProduct.type, _getCategoryProduct),
  takeLatest(getAllNew.type, _getNew),
];

export default sagas;
