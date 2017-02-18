import React, { Component } from 'react';

import MenuButton from './menuButton';
import Constants from '../../config/constants';

require('../../../assets/styles/pageHeader');

class PageHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      className: ''
    };
  }

  render() {
    return (
      <div className="page-header">
        <MenuButton />
        <h2>{Constants.TITLE}</h2>
      </div>
    );
  }

}

export default PageHeader;
