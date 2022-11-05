import { combineReducers } from 'redux';
import account from './account';
// import landing from './landing';

const rootReducer = combineReducers({
    account: account.reducer,
    // landing: landing.reducer,
});

export default rootReducer;