import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { useStrict } from 'mobx';

import routes from './config/routes';

require('../assets/styles/app');

useStrict(true);

render(
  <Router history={browserHistory}>{routes}</Router >,
  document.getElementById('app')
);
