import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

/**
 * ReudxThunk function
 * @description reduxThunk function, 비동기 통신을 위해 setTimeOut 처리함
 * */
export const increaseThunk = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseThunk = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = handleActions({
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1
}, initialState);

export default counter;