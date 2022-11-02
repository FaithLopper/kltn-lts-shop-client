import { takeLatest, call, put, all } from "redux-saga/effects";
import { getAllCategoryProduct } from "../actions/appCommon";
import apiConfig from "../constants/apiConfig";
import { sendRequest } from "../services/apiService";
import { setCategoryProduct } from "../reducers/appCommon";

function* _getCategoryProduct({ payload: { params, onCompleted, onError } }) {
  console.log("vao saga");
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
      console.log(responseData);
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

const sagas = [takeLatest(getAllCategoryProduct.type, _getCategoryProduct)];

export default sagas;
