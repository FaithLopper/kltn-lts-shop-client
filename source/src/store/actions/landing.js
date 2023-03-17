import { createAction } from '@store/utils';

export const getProdsPerCategoriesAction = createAction('LANDING/GET_PRODS_PER_CATE', { success: true, fail: true });

export const actions = {
    getProdsPerCategoriesAction,
};
