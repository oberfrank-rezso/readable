import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'config/store';
import Routes from 'config/routes';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
