import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Compose from 'views/Compose';
import Home from 'views/Home';
import Single from 'views/Single';

import FourOhFour from 'shared/components/FourOhFour';

const Routes = () => (
  <Switch>
    <Route exact path="/compose" component={Compose} />
    <Route exact path="/:category?" component={Home} />
    <Route exact path="/:category/:postId" component={Single} />
    <Route component={FourOhFour} />
  </Switch>
);

export default Routes;
