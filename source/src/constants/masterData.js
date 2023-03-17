import { activityType } from '.';
import routes from '@routes';
import { articleActions, gameActions, videoActions } from '@store/actions';
import { STATUS_ACTIVE, STATUS_LOCK, STATUS_PENDING } from '@constants';
import { defineMessage } from 'react-intl';
// export const dataMap = {
//     [activityType.GAME]: {
//         title: 'GAMES',
//         getActivityList: gameActions.gameList,
//         getActivityCategories: gameActions.gameCatagories,
//         urlDetails: routes.gameDetailsPage.path,
//     },
//     [activityType.ARTICLE]: {
//         title: 'ARTICLES',
//         getActivityList: articleActions.articleList,
//         getActivityCategories: articleActions.articleCatagories,
//         urlDetails: routes.articleDetailsPage.path,
//     },
//     [activityType.VIDEO]: {
//         title: 'VIDEOS',
//         getActivityList: videoActions.videoList,
//         getActivityCategories: videoActions.videoCatagories,
//         urlDetails: routes.videoDetailsPage.path,
//     },
// };

const commonMessage = defineMessage({
    active: {
        id: 'constants.masterData.commonMessage.active',
        defaultMessage: 'Active',
    },
    pending: {
        id: 'constants.masterData.commonMessage.pending',
        defaultMessage: 'Pending',
    },
    lock: {
        id: 'constants.masterData.commonMessage.lock',
        defaultMessage: 'Lock',
    },
});

export const languageOptions = [
    { value: 1, label: 'EN' },
    { value: 2, label: 'VN' },
    { value: 3, label: 'Other' },
];

export const orderOptions = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
];

export const commonStatus = [
    { value: STATUS_ACTIVE, label: 'Kích hoạt', color: 'green' },
    { value: STATUS_PENDING, label: 'Đang chờ', color: 'warning' },
    { value: STATUS_LOCK, label: 'Đang khóa', color: 'red' },
];

export const statusOptions = [
    { value: STATUS_ACTIVE, label: commonMessage.active, color: 'green' },
    { value: STATUS_PENDING, label: commonMessage.pending, color: 'warning' },
    { value: STATUS_LOCK, label: commonMessage.lock, color: 'red' },
];

export const productKinds = {
    SINGLE: 1,
    COLLECTION: 2,
};

