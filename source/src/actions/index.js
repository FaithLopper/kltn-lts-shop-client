import {
  actions as accountActions,
  actionTypes as accountTypes,
} from "./account";
import {actions as newsActions, actionTypes as newsTypes} from './news';
import {actions as categoryActions, actionTypes as categoryTypes} from './category';
import {actions as productActions, actionTypes as productTypes} from './product';
import {actions as cartActions, actionTypes as cartTypes} from './cart';

export const actions = {
  ...accountActions,
  ...newsActions,
  ...categoryActions,
  ...productActions,
  ...cartActions,
};

export const types = {
  ...accountTypes,
  ...newsTypes,
  ...categoryTypes,
  ...productTypes,
  ...cartTypes,
};
