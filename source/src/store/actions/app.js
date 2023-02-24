import { createAction } from '@store/utils';

export const showAppLoading = createAction('app/SHOW_LOADING');
export const hideAppLoading = createAction('app/HIDE_LOADING');
export const toggleActionLoading = createAction('app/ACTION_LOADING');
export const changeLanguage = createAction('app/CHANGE_LANGUAGE');
export const uploadFile = createAction('app/UPLOAD_FILE');
export const setSiteSlug = createAction('app/SET_SITE_SLUG');
export const setSiteInfo = createAction('app/SET_SITE_INFO');

export const actions = {
    showAppLoading,
    hideAppLoading,
    toggleActionLoading,
    changeLanguage,
    uploadFile,
    setSiteSlug,
    setSiteInfo,
};
