import { createReducer } from '@store/utils';
import { landingActions } from '@store/actions';

const { getProdsPerCategoriesAction } = landingActions;

const initialState = {
    getProdsPerCategoriesLoading: false,
    prodsPerCategories: [],
};

const landingReducer = createReducer(
    {
        reducerName: 'landing',
        initialState,
        storage: false,
    },
    {
        [getProdsPerCategoriesAction.type]: (state) => {
            state.getProdsPerCategoriesLoading = true;
        },
        [getProdsPerCategoriesAction.success.type]: (state, action) => {
            state.getProdsPerCategoriesLoading = false;
            if (action.payload?.data && action.payload?.customReducerData) {
                const prodsPerCategory = {
                    products: action.payload?.data,
                    ...action.payload?.customReducerData,
                };
                state.prodsPerCategories =  [ ...state.prodsPerCategories, { ...prodsPerCategory  } ];
            }
        },
        [getProdsPerCategoriesAction.fail.type]: (state, action) => {
            state.getProdsPerCategoriesLoading = false;
            state.prodsPerCategories = JSON.parse(JSON.stringify(action.payload?.data || []));
        },
    },
);

export default landingReducer;
