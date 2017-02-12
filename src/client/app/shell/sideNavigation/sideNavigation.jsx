import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import { observe } from 'mobx';

import navigationStore from '../../stores/navigation';

const styles = require('../../../assets/styles/navigation.scss');

let rows = ['/ducks', '/home'].map(function (key, value) {
    return (<Link to={key} key={value}>
        <button className='btn btn-default'>{key.slice(1)}</button>
    </Link>);
});

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
