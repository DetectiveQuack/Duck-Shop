import React, { Component, PropTypes } from 'react';

import PageHeader from './header/pageHeader.jsx';
import SideNavigation from './sideNavigation/sideNavigation.jsx';
import navigationStore from '../stores/navigation';

class Shell extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SideNavigation></SideNavigation>
                <div className='page-content'>
                    <PageHeader></PageHeader>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Shell;