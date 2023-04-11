import { createAction } from '@store/utils';

export const addProduct = createAction('cart/ADD', { success: true, fail: true });
export const updateCart = createAction('cart/UPDATE', { success: true, fail: true });
export const updateLocalCart = createAction('cart/LOCAL_UPDATE', { success: true, fail: true });

export const actions = {
    addProduct,
    updateCart,
    updateLocalCart,
};
