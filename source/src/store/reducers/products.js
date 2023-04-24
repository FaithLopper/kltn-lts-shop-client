import { createReducer } from '@store/utils';
import { productsActions } from '@store/actions';

const { getAllProductsAction, getAllProductsFilterAction } = productsActions;

const initialState = {
    products: [],
    getProductsLoading: false,
    productsFilter: [],
    getProductsFilterLoading: false,
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
        [getAllProductsFilterAction.type]: (state) => {
            state.getProductsFilterLoading = true;
        },
        [getAllProductsFilterAction.success.type]: (state, { payload }) => {
            state.getProductsFilterLoading = false;
            state.productsFilter = payload.data;
        },
        [getAllProductsAction.fail.type]: (state, { payload }) => {
            state.getProductsLoading = false;
            state.products = JSON.parse(JSON.stringify(payload?.data || []));
        },
    },
);

export default productsReducer;
