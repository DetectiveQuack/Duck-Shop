import React, { Component } from 'react';

import navigationStore from '../../stores/navigation';
import MenuButton from './menuButton.jsx';
import Constants from '../../config/constants';

require('../../../assets/styles/pageHeader.scss');

class PageHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            className: ''
        };
    }   

    render() {
        return (
            <div className='page-header'>
                <MenuButton></MenuButton>
                <h2>{Constants.TITLE}</h2>
            </div>
        );
    }

}

export default PageHeader;