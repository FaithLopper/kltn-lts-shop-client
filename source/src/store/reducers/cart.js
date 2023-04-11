import { createReducer } from '@store/utils';
import { cartActions } from '@store/actions';
import { appCart } from '@constants';
import { current } from '@reduxjs/toolkit';
import { getData } from '@utils/localStorage';
const { addProduct, initCart, destroyCart, removeProduct, updateCart } = cartActions;

const currentCart = getData(appCart) || [];
const initialState = {
    currentCart,
};

const appReducer = createReducer(
    {
        reducerName: 'cart',
        initialState,
    },
    {
        [addProduct.success.type]: (state, { updatedCart }) => {
            state.currentCart = JSON.parse(JSON.stringify(updatedCart));
        },
        [updateCart.success.type]: (state, { updatedCart }) => {
            state.currentCart = JSON.parse(JSON.stringify(updatedCart));
        },
        [initCart.type]: (state, { payload }) => {
            state.cartData = payload.cartData;
        },
        [destroyCart.type]: (state) => {
            state.cartData = {
                cartListData: [],
                userData: null,
            };
        },
        [removeProduct.success.type]: (state, { product, onCompleted }) => {
            const cartData = current(state.cartData);
            state.cartData.cartListData = cartData.cartListData.filter((x, index) => index !== product.index);
            onCompleted(current(state.cartData), current(state.cartData).userData);
        },
    },
);

export default appReducer;
