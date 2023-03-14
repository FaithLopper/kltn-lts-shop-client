import { createReducer } from '@store/utils';
import { appActions } from '@store/actions';
import { defaultLocale } from '@constants';

const {
    hideAppLoading,
    showAppLoading,
    toggleActionLoading,
    changeLanguage,
    setSiteInfo,
    showAppCartModal,
    hideAppCartModal,
} = appActions;

const initialState = {
    appLoading: 0,
    locale: defaultLocale,
    siteInfo: null,
    cartModal:false,
    cartProduct:{},
};

const appReducer = createReducer(
    {
        reducerName: 'app',
        initialState,
        storage: {
            whiteList: [ 'theme', 'locale' ],
        },
    },
    {
        [showAppLoading.type]: (state) => {
            state.appLoading++;
        },
        [hideAppLoading.type]: (state) => {
            state.appLoading = Math.max(0, state.appLoading - 1);
        },
        [toggleActionLoading.type]: (state, action) => {
            if (action.payload.isLoading) {
                state[action.payload.type] = true;
            } else {
                delete state[action.payload.type];
            }
        },
        [changeLanguage.type]: (state, { payload }) => {
            state.locale = payload;
        },
        [showAppCartModal.type]: (state, { product }) => {
            state.cartModal = true;
            state.cartProduct= product;
        },
        [hideAppCartModal.type]: (state) => {
            state.cartModal = false;
            state.cartProduct= {};
        },
    },
);

export default appReducer;
