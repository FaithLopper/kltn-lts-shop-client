import { createReducer } from '@store/utils';
import { cartActions } from '@store/actions';
import { appCart, appSession, shopVariantKey } from '@constants';
import { createSuccessActionType } from '@store/utils';
import { current } from '@reduxjs/toolkit';
import { getData } from '@utils/localStorage';
const { addProduct, initCart, destroyCart, removeProduct } = cartActions;
const currentUser = getData(appSession);
const currentUserCart = currentUser ? getData(`${appCart}-${currentUser}`) : getData(appCart);
const cartData = currentUserCart
    ? currentUserCart
    : {
        cartListData: [],
        userData: null,
    };
const initialState = {
    cartData,
};

const appReducer = createReducer(
    {
        reducerName: 'cart',
        initialState,
    },
    {
        [addProduct.success.type]: (state, { product, userId, onCompleted }) => {
            const cartList = current(state.cartData.cartListData);
            const existItem = cartList.find((x) => {
                if (x.id === product.id) {
                    let exist = 0;
                    x.selectedVariants.map((item, index) => {
                        if (item.id === product.selectedVariants[index].id) exist++;
                    });
                    if (exist === 2) return x;
                    else return undefined;
                } else return undefined;
            });
            if (!existItem) state.cartData.cartListData = [ ...state.cartData.cartListData, { ...product, quantity: 1 } ];
            else
                state.cartData.cartListData = cartList.map((item) => {
                    if (item.id === product.id) {
                        let exist = 0;
                        item.selectedVariants.map((x, index) => {
                            if (x.id === product.selectedVariants[index].id) exist++;
                        });
                        if (exist === 2)
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                                selectedPrice: (item.quantity + 1) * item.selectedPrice,
                            };
                        else return item;
                    } else return item;
                });
            if (userId || state.cartData.userData) state.cartData.userData = userId;
            onCompleted(current(state.cartData));
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
