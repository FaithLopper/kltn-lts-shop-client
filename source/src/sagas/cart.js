import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { actionTypes, reduxUtil } from "../actions/cart";

import apiConfig from "../constants/apiConfig";

import { sendRequest } from "../services/apiService";
import { handleApiResponse } from "../utils/apiHelper";
const { defineActionLoading, defineActionSuccess, defineActionFailed } =
  reduxUtil;

const { ADD_ITEM_CART, REMOVE_ITEM_CART, SHOW_MODAL_CART, CLOSE_MODAL_CART } =
  actionTypes;

function* addItemCart({ payload: { params, onCompleted, onError } }) {
  const getItems = (state) => state.cart.cartListData;
  try {
    const itemsBefore = yield select(getItems);
    yield put({
      type: defineActionSuccess(ADD_ITEM_CART),
      product: params.product,
    });
    const items = yield select(getItems);
    localStorage.setItem("cartItems", JSON.stringify(items));
    if (itemsBefore.length !== items.length) {
      onCompleted(params.product);
    }
  } catch (error) {
    onError(error);
  }
}

function* removeItemCart({ payload: { params, onCompleted, onError } }) {
  const getItems = (state) => state.cart.cartListData;
  try {
    const itemsBefore = yield select(getItems);
    console.log("asd");
    yield put({
      type: defineActionSuccess(REMOVE_ITEM_CART),
      product: params.product,
    });
    const items = yield select(getItems);
    localStorage.setItem("cartItems", JSON.stringify(items));
    if (itemsBefore.length !== items.length) {
      onCompleted(params.product);
    }
  } catch (error) {
    onError(error);
  }
}

function* showModalCart({ payload: { params } }) {
  try {
    yield put({
      type: defineActionSuccess(SHOW_MODAL_CART),
      product: params.product,
    });
  } catch (error) {
    console.log(error);
  }
}

function* closeModalCart({ payload }) {
  try {
    yield put({
      type: defineActionSuccess(CLOSE_MODAL_CART),
    });
  } catch (error) {
    console.log(error);
  }
}
const sagas = [
  takeLatest(actionTypes.ADD_ITEM_CART, addItemCart),
  takeLatest(actionTypes.REMOVE_ITEM_CART, removeItemCart),
  takeLatest(actionTypes.SHOW_MODAL_CART, showModalCart),
  takeLatest(actionTypes.CLOSE_MODAL_CART, closeModalCart),
];

export default sagas;
