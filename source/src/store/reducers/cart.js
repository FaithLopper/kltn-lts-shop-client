import { createReducer } from '@store/utils';
import { cartActions } from '@store/actions';
import { appCart, appSession, appUserCarts } from '@constants';
import { createSuccessActionType } from '@store/utils';
import { current } from '@reduxjs/toolkit';
import { getData, setData } from '@utils/localStorage';
import { compare2Obj } from '@utils';
const { addProduct, initCart, destroyCart, removeProduct } = cartActions;

const currentUser = getData(appSession);
const usersCartData = getData(appUserCarts) || [];
const currentCart = currentUser
    ? () => {
        return usersCartData.find((cart) => cart.userId === currentUser) || [];
    }
    : getData(appCart) || [];

const initialState = {
    // cartData,
    usersCartData,
    currentCart,
};

const appReducer = createReducer(
    {
        reducerName: 'cart',
        initialState,
    },
    {
        [addProduct.success.type]: (state, { product, userId, quantity }) => {
            let cart = JSON.parse(JSON.stringify(state.currentCart));
            let foundedProduct = cart.findIndex((productInCart) => compare2Obj(productInCart.product, product));
            console.log(cart);
            //currentCart
            if (foundedProduct >= 0) {
                cart[foundedProduct].quantity += quantity;
            } else cart.push(JSON.parse(JSON.stringify({ product: product, quantity: quantity })));

            state.currentCart = JSON.parse(JSON.stringify(cart));

            //userCart
            if (userId) {
                let foundedCart = state.usersCartData.findIndex((userCart) => userCart.userId === userId);
                if (foundedCart >= 0) state.usersCartData[foundedCart].cart = JSON.parse(JSON.stringify(cart));
                else state.usersCartData = [...state.usersCartData, { userId: userId, cart }];
                //set to local
                setData(appUserCarts, state.usersCartData);
            }

            //set to local
            setData(appCart, state.currentCart);
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
