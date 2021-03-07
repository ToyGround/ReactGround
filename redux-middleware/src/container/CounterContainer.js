import React from 'react';
import {connect} from 'react-redux';
import {increaseThunk, decreaseThunk} from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer({number, increaseThunk, decreaseThunk}) {
  return (
    <Counter number={number} onIncrease={increaseThunk} onDecrease={decreaseThunk}/>
  );
}

export default connect(state => ({
  number: state.counter
}), {
  increaseThunk,
  decreaseThunk
})(CounterContainer);