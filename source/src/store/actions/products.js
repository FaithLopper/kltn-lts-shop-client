import { createAction } from '@store/utils';

export const getAllProductsAction = createAction('PRODUCTS/GET_ALL', { success: true, fail: true });
export const getAllProductsFilterAction = createAction('PRODUCTS/GET_FILTER', { success: {} });
export const clearAllProductsFilterAction = createAction('PRODUCTS/CLEAR_FILTER');

export const actions = {
    getAllProductsAction,
    getAllProductsFilterAction,
    clearAllProductsFilterAction,
};
