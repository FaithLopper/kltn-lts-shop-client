import reduxHelper from '../utils/redux';

export const reduxUtil = reduxHelper('CART');

const { defineAction, createActionWithLoading, createAction } = reduxUtil;

export const actionTypes = {
    ADD_ITEM_CART: defineAction('ADD_ITEM_CART'),
    REMOVE_ITEM_CART: defineAction('REMOVE_ITEM_CART'),
    SHOW_MODAL_CART:defineAction('SHOW_MODAL_CART'),
    CLOSE_MODAL_CART:defineAction('CLOSE_MODAL_CART'),
}

export const actions = {
    addItemCart: createAction(actionTypes.ADD_ITEM_CART),
    removeItemCart: createAction(actionTypes.REMOVE_ITEM_CART),
    showModalCart: createAction(actionTypes.SHOW_MODAL_CART),
    closeModalCart: createAction(actionTypes.CLOSE_MODAL_CART),
}