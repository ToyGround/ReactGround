import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import category, {categorySaga} from './category';

const rootReducer = combineReducers({
  category
});

export function* rootSaga() {
  yield all([categorySaga()]);
}

export default rootReducer;