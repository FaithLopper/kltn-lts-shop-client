import { createReducer } from '@store/utils';
import { cartActions } from '@store/actions';
import { appCart } from '@constants';
import { createSuccessActionType } from '@store/utils';
import { current } from '@reduxjs/toolkit';
const { addProduct } = cartActions;
const cartData = localStorage.getItem(appCart)
    ? JSON.parse(localStorage.getItem(appCart))
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
        [createSuccessActionType(addProduct.type)]: (state, { product }) => {
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
                        console.log(item);
                        if (exist === 2) return { ...item, quantity: item.quantity + 1 };
                        else return item;
                    } else return item;
                });
            // localStorage.setItem(appCart, JSON.stringify(state.cartListData));
        },
    },
);

export default appReducer;
