import {
  actions as accountActions,
  actionTypes as accountTypes,
} from "./account";
import {actions as newsActions, actionTypes as newsTypes} from './news';

export const actions = {
  ...accountActions,
  ...newsActions,
};

export const types = {
  ...accountTypes,
  ...newsTypes,
};
