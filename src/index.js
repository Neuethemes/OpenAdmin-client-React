import '../node_modules/font-awesome/css/font-awesome.min.css';
import './scss/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './views/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);
