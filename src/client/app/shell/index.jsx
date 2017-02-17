import React, { Component, PropTypes } from 'react';

import PageHeader from './header';
import SideNavigation from './sideNavigation';

class Shell extends Component {

  render() {
    return (
      <div>
        <SideNavigation />
        <div className="page-content">
          <PageHeader />
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Shell.propTypes = {
  children: PropTypes.element.isRequired
};

export default Shell;
