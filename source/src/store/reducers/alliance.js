import { createReducer } from '@store/utils';
import { allianceActions } from '@store/actions';
import { defaultLocale } from '@constants';

const { getAlliance, setAlliance } = allianceActions;

const initialState = {
    alliance: {},
};

const allianceReducer = createReducer(
    {
        reducerName: 'alliance',
        initialState,
    },
    {
        [setAlliance.type]: (state, { payload }) => {
            state.alliance = payload || null;
            // state.profile = payload?.data || null;
        },
    },
);

export default allianceReducer;
