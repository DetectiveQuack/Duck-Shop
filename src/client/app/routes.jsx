import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Shell from './shell.jsx';
import Home from './pages/home.jsx';
import Ducks from './pages/ducks.jsx';
import NotFound from './pages/notFound.jsx';

const routes = (
    <Route path="/" component={Shell}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="ducks" component={Ducks} />
        <Route path="*" component={Home} />
    </Route>
);

export default routes;