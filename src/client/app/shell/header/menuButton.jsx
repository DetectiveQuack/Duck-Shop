import React, { Component } from 'react';
import navigationStore from '../../stores/navigation';

class MenuButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            className: ''
        };
    }

    setActive() {
        this.setState(prevState => ({
            className: prevState.className === 'is-active' ? '' : 'is-active'
        }));

        navigationStore.setMenuVisibility();
    }

    render() {
        return (
            <div className={`hamburger hamburger--emphatic ${this.state.className}`} onClick={this.setActive.bind(this)}>
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </div>
        );
    }

}

export default MenuButton;