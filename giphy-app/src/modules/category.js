import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import {createRequestActionType} from '../lib/createRequest';
import {callAPI} from '../lib/api';
import config from '../config';

const [CATEGORY, CATEGORY_SUCCESS, CATEGORY_FAILURE] = createRequestActionType('CATEGORY');

const fetchAPI = callAPI({kind: config.KIND.GIFS, type: config.TYPE.CATEGORY});

export const categoryAsync = createAction(CATEGORY, fetchAPI);

function* getCategorySata() {
  try {
    const response = yield call(fetchAPI);
    yield  put({
      type   : CATEGORY_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    yield put({
      type   : CATEGORY_FAILURE,
      payload: e,
      error  : true
    });
  }
}

export function* categorySaga() {
  yield takeLatest(CATEGORY, getCategorySata);
}

const initialState = {
  data   : null,
  error  : null,
  loading: null
};

export default handleActions({
  [CATEGORY]        : state => ({
    ...state,
    loading: true
  }),
  [CATEGORY_SUCCESS]: (state, {payload: data}) => ({
    ...state,
    loading: false,
    data
  }),
  [CATEGORY_FAILURE]: (state, {payload: error}) => ({
    ...state,
    loading: null,
    data   : null,
    error
  })
}, initialState);