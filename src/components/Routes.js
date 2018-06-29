import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewPage from '../containers/NewPostContainer';
import HomePage from '../containers/PostsPageContainer';
import SinglePage from '../containers/SinglePageContainer';
import FourOhFour from '../components/FourOhFour';

const Routes = () => (
  <Switch>
    <Route exact path="/new" component={NewPage} />
    <Route exact path="/404" component={FourOhFour} />
    <Route exact path="/:category?" component={HomePage} />
    <Route exact path="/:category/:postId" component={SinglePage} />
    <Route component={FourOhFour} />
  </Switch>
);

export default Routes;
