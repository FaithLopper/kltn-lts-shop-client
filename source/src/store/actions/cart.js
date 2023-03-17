import { createAction } from '@store/utils';

export const addProduct = createAction('cart/ADD');
export const removeProduct = createAction('cart/REMOVE');
export const initCart = createAction('cart/INIT');
export const destroyCart = createAction('cart/DETROY');

export const actions = {
    addProduct,
    initCart,
    destroyCart,
    removeProduct,
};
