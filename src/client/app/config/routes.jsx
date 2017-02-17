import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Shell from '../shell';
import Home from '../shell/home';
import Ducks from '../pages/ducks';
import NotFound from '../pages/notFound';

const routes = (
  <Route path="/" component={Shell}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="ducks" component={Ducks} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
