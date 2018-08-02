import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import Single from 'screens/Single';
import FourOhFour from 'shared/components/FourOhFour';
import Modal from 'shared/components/Modal';

import store from 'duck/store';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/:category?" component={Home} />
          <Route exact path="/:category/:postId" component={Single} />
          <Route component={FourOhFour} />
        </Switch>
        <Modal />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
