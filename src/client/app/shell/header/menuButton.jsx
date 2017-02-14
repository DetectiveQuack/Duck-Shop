import React, { Component } from 'react';

import navigationStore from '../../stores/navigation';

class MenuButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      className: ''
    };

    this.setActive = this.setActive.bind(this);
  }

  setActive() {
    this.setState(prevState => ({
      className: prevState.className === 'is-active' ? '' : 'is-active'
    }));

    navigationStore.setMenuVisibility();
  }

  render() {
    return (
      <button className={`hamburger hamburger--emphatic ${this.state.className}`} onClick={this.setActive}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    );
  }

}

export default MenuButton;
