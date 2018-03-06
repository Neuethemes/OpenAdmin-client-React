import '../node_modules/font-awesome/css/font-awesome.min.css';
import './scss/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers/store'
import { App } from './App';

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector('#root')
);
