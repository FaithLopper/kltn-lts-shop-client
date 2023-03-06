import { createReducer } from '@store/utils';
import { cartActions } from '@store/actions';
import { appCart, defaultLocale } from '@constants';

const { addProduct } = cartActions;
const cartListData = localStorage.getItem(appCart) ? JSON.parse(localStorage.getItem(appCart)) : [];
const initialState = {
    cartListData,
};

const appReducer = createReducer(
    {
        reducerName: 'cart',
        initialState,
    },
    {
        [addProduct.type]: (state, { payload: { product, onCompleted } }) => {
            console.log(product);
            const existItem = state.cartListData.find((x) => {
                if (x.id === product.id) {
                    if (product.color?.id === x.color?.id && product.size?.id === x.size?.id) {
                        return x;
                    }
                    return undefined;
                } else return undefined;
            });
            onCompleted();
        },
    },
);

export default appReducer;
