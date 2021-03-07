import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import counter, {counterSaga} from './counterSaga';

const rootReducer = combineReducers({
  counter
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;