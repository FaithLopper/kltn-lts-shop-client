import { actionTypes, reduxUtil } from "../actions/product";

const {
  createReducer,
  defineActionSuccess,
  defineActionLoading,
  defineActionFailed,
} = reduxUtil;
const { GET_PRODUCT_LIST } = actionTypes;

const initialState = {
  productList: [],
  getProductListLoading: false,
};

const reducer = createReducer(
  {
    [defineActionLoading(GET_PRODUCT_LIST)]: (state) => {
      return { ...state, getProductListLoading: true };
    },
    [defineActionSuccess(GET_PRODUCT_LIST)]: (state, { productData }) => {
      // console.log({
      //   ...state,
      //   productList: [...state.productList, productData],
      // });
      return { ...state, productList: [...state.productList, productData], getProductListLoading: false };
    },
    [defineActionFailed(GET_PRODUCT_LIST)]: (state) => {
      return {
        ...state,
        getProductListLoading: false,
      };
    },
  },
  initialState
);

const product = { reducer };

export default product;
