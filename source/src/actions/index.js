import {
  actions as accountActions,
  actionTypes as accountTypes,
} from "./account";
import {actions as newsActions, actionTypes as newsTypes} from './news';
import {actions as cartActions, actionTypes as cartTypes} from './cart';

export const actions = {
  ...accountActions,
  ...newsActions,
  ...cartActions,
};

export const types = {
  ...accountTypes,
  ...newsTypes,
  ...cartTypes,
};
