import { createAction } from '@store/utils';

export const getAllProductCategoriesAction = createAction('CATE_PRODUCT/GET_ALL', { success: true, fail: true });

export const actions = {
    getAllProductCategoriesAction,
};
