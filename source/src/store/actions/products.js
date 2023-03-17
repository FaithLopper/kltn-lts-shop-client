import { createAction } from '@store/utils';

export const getAllProductsAction = createAction('PRODUCTS/GET_ALL', { success: true, fail: true });

export const actions = {
    getAllProductsAction,
};
