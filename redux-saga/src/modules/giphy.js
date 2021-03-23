import {createAction, handleActions} from 'redux-actions';
import {createRequestActionType} from '../lib/createRequestSaga';
import axios from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

const API_KEY = process.env.REACT_APP_API_KEY;

const callAPI = async () => {
  const response = await axios(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=5&offset=5&random_id=e826c9fc5c929e0d6c6d423841a282aa`);
  console.log('[callAPI]', response)
  return response.data;
};

const [GIPHY, GIPHY_SUCCESS, GIPHY_FAILURE] = createRequestActionType('GIPHY');

export const giphyAsync = createAction(GIPHY, callAPI);

function* testSaga(){
  try {
    const response = yield call(callAPI);
    yield put({
      type   : GIPHY_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    yield put({
      type   : GIPHY_FAILURE,
      payload: e,
      error  : true
    });
  }
}

export function* giphySaga() {
  yield takeLatest(GIPHY, testSaga)
}

const initialState = {
  giphy  : null,
  loading: null,
  error  : null
};

export default handleActions({
  [GIPHY]        : (state) => ({
    ...state,
    loading: true
  }),
  [GIPHY_SUCCESS]: (state, {payload: giphy}) => ({
    ...state,
    loading: false,
    giphy
  }),
  [GIPHY_FAILURE]: (state, {payload: error}) => ({
    ...state,
    loading: null,
    giphy  : null,
    error
  })
}, initialState);