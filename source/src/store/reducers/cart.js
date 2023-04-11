import { createReducer } from '@store/utils';
import { cartActions } from '@store/actions';
import { appCart } from '@constants';
import { getData } from '@utils/localStorage';
const { addProduct, updateCart } = cartActions;

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
    },
);

export default appReducer;
