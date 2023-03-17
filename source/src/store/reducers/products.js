import { createReducer } from '@store/utils';
import { productsActions } from '@store/actions';

const {
    getAllProductsAction,
} = productsActions;

const initialState = {
    products: [],
    getProductsLoading: false,
};

const productsReducer = createReducer(
    {
        reducerName: 'products',
        initialState,
        storage: false,
    },
    {
        [getAllProductsAction.type]: (state) => {
            state.getProductsLoading = true;
        },
        [getAllProductsAction.success.type]: (state, { payload }) => {
            state.getProductsLoading = false;
            state.products = JSON.parse(JSON.stringify(payload?.data || []));
        },
        [getAllProductsAction.fail.type]: (state, { payload }) => {
            state.getProductsLoading = false;
            state.products = JSON.parse(JSON.stringify(payload?.data || []));
        },

    },
);

export default productsReducer;
