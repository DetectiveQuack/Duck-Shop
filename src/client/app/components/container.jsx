import React, { Component, PropTypes } from 'react';

class Container extends Component {

  render() {
    return (
      <div className="item-container">
        <div>{this.props.description}</div>
        <div>{this.props.price}</div>
      </div>
    );
  }

}

Container.propTypes = {
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Container;
