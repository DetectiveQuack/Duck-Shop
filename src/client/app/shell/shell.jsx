import React, { Component, PropTypes } from 'react';

import PageHeader from './header/pageHeader';
import SideNavigation from './sideNavigation/sideNavigation';

class Shell extends Component {

  render() {
    return (
      <div>
        <SideNavigation />
        <div className="page-content">
          <PageHeader />
          {this.props.children}
        </div>
      </div>
    );
  }
}

Shell.propTypes = {
  children: PropTypes.element.isRequired
};

export default Shell;
