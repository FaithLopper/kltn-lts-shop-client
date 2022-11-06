import {
  actions as appCommonActions,
  actionTypes as appCommonTypes,
} from "./appCommon";

import {
  actions as productActions,
  actionTypes as productTypes,
} from "./product";

export const actions = {
  ...appCommonActions,
  ...productActions,
};

export const types = {
  ...appCommonTypes,
  ...productTypes,
};
