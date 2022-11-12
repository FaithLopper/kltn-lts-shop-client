import { actionTypes, reduxUtil } from "../actions/cart";

const {
  createReducer,
  defineActionSuccess,
  defineActionLoading,
  defineActionFailed,
} = reduxUtil;

const { ADD_ITEM_CART, REMOVE_ITEM_CART, SHOW_MODAL_CART, CLOSE_MODAL_CART } =
  actionTypes;

const cartListData = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartListData,
  cartProduct: {},
  modalStatus: false,
};

const reducer = createReducer(
  {
    [defineActionSuccess(ADD_ITEM_CART)]: (state, { product }) => {
      const existItem = state.cartListData.find((x) => {
        if (x.id === product.id) {
          if (
            product.color?.id === x.color?.id &&
            product.size?.id === x.size?.id
          ) {
            return x;
          }
          return undefined;
        } else return undefined;
      });
      if (existItem === undefined || existItem === false)
        return {
          ...state,
          cartListData: [...state.cartListData, product],
        };
      else
        return {
          ...state,
          cartListData: [...state.cartListData],
        };
    },
    [defineActionSuccess(SHOW_MODAL_CART)]: (state, { product }) => {
      console.log("cheeee");
      return {
        ...state,
        cartProduct: product,
        modalStatus: true,
      };
    },
    [defineActionSuccess(REMOVE_ITEM_CART)]: (state, { product }) => {
      console.log(product);
      return {
        ...state,
        cartListData: state.cartListData.filter(
          (x) =>
            x.id !== product.id &&
            x.size.id !== product.size.id &&
            x.color.id !== product.color.id 
        ),
      };
    },
    [defineActionSuccess(CLOSE_MODAL_CART)]: (state) => {
      return {
        ...state,
        modalStatus: false,
      };
    },
  },
  initialState
);

export default {
  reducer,
};
