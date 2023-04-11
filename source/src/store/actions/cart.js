import { createAction } from '@store/utils';

export const addProduct = createAction('cart/ADD', { success: true, fail: true });
export const removeProduct = createAction('cart/REMOVE', { success: true, fail: true });
export const initCart = createAction('cart/INIT', { success: true, fail: true });
export const destroyCart = createAction('cart/DETROY', { success: true, fail: true });
export const updateCart = createAction('cart/UPDATE', { success: true, fail: true });
export const updateLocalCart = createAction('cart/LOCAL_UPDATE', { success: true, fail: true });

export const actions = {
    addProduct,
    initCart,
    destroyCart,
    removeProduct,
    updateCart,
    updateLocalCart,
};
