import React, { Component } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

import navigationStore from '../../stores/navigation';

require('../../../assets/styles/navigation');

const routes = ['/ducks', '/home'];

const rows = routes.map(key => (
  <Link to={key} key={key}>
    <button className="btn btn-default">{key.slice(1)}</button>
  </Link>
));

@observer class SideNavigation extends Component {
  render() {
    return (
      <div className={`navbar navbar-fixed-left ${navigationStore.isOpen ? 'nav-slide-open' : 'nav-slide-close'}`}>
        {rows}
      </div>
    );
  }
}

export default SideNavigation;
