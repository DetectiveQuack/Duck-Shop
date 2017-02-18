import React, { Component, PropTypes } from 'react';

class Container extends Component {

  render() {
    return (
      <div className="item-container">
        <img alt={this.props.description} src={this.props.image} />
        <div>{this.props.description}</div>
        <div>{`£${parseInt(this.props.price, 10).toFixed(2)}`}</div>
      </div>
    );
  }

}

Container.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Container;
