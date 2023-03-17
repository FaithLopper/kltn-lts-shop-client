import { createReducer } from '@store/utils';
import { categoriesActions } from '@store/actions';

const {
    getAllProductCategoriesAction,
} = categoriesActions;

const initialState = {
    prodCategories: [],
    getProdCategoriesLoading: false,
};

const categoriesReducer = createReducer(
    {
        reducerName: 'categories',
        initialState,
        storage: false,
    },
    {
        [getAllProductCategoriesAction.type]: (state) => {
            state.getProdCategoriesLoading = true;
        },
        [getAllProductCategoriesAction.success.type]: (state, { payload }) => {
            state.getProdCategoriesLoading = false;
            state.prodCategories = JSON.parse(JSON.stringify(payload?.data || []));
        },
        [getAllProductCategoriesAction.fail.type]: (state, { payload }) => {
            state.getProdCategoriesLoading = false;
            state.prodCategories = JSON.parse(JSON.stringify(payload?.data || []));
        },

    },
);

export default categoriesReducer;
