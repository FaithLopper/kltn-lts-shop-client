import { createAction, createSuccessActionType } from '@store/utils';

export const getAlliance = createAction('alliance/GET_ALLIANCE');
export const setAlliance = createAction('alliance/SET_ALLIANCE');

export const actions = {
    getAlliance,
    setAlliance,
};
