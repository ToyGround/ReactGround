import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

/**
 * createAction 2번째 파라미터 () => undefined 이유:
 * 마우스 클릭 이벤트시 payload 안에 들어가지 않도록 undefined 를 넣는다.
 * */
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

/** saga 함수 */
function* increaseSaga() {
  yield delay(1000); // 비동기 통신의 예를 위해 1초를 기다린다.
  yield put(increase()); // 액션을 디스패치
}

function* decreaseSaga() {
  yield delay(1000); // 비동기 통신의 예를 위해 1초를 기다린다.
  yield put(decrease()); // 액션을 디스패치
}

export function* counterSaga(){
  // takeEvery는 들어오는 모든 액션에 대해 작업을 처리함
  yield takeEvery(INCREASE_ASYNC, increaseSaga)

  // takeLatest는 기존에 진행중이던 작업이 있다면 취소, 가장 마지막으로 실행된 작업만 수행된다!
  yield takeLatest(DECREASE_ASYNC, decreaseSaga)
}

const initialState = 0;

const counter = handleActions({
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1
}, initialState);

export default counter;