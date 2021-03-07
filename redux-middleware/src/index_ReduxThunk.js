import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import App from './App';
import rootReducer from './modules';

const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
