import { put, takeLatest } from 'redux-saga/effects';
import { uploadFile } from '@store/actions/app';
import { allianceActions } from '@store/actions';

const { getAlliance, setAlliance } = allianceActions;
function* _setAlliance({ payload: { data } }) {
    try {
        yield put({
            type: setAlliance.type,
            data,
        });
    } catch (error) {
        console.log(error);
    }
}

const sagas = [ takeLatest(setAlliance.type, _setAlliance) ];

export default sagas;
