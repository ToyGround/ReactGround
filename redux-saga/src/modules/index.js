import {combineReducers} from 'redux';
import giphy, {giphySaga} from './giphy';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
  giphy
});

export function* rootSaga() {
  yield all([giphySaga()]);
}

export default rootReducer;