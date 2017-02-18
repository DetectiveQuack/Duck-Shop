import React, { Component } from 'react';

import Container from '../components/container';
import Data from '../services/data';

class Ducks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ducks: []
    };
  }

  componentWillMount() {
    this.populateItems();
  }

  async populateItems() {
    const ducks = await Data.getDucks();

    const itemElements = ducks.data.map((item) => {
      const key = Symbol(item.description).toString();

      return (
        <Container key={key} description={item.description} price={item.price} image={item.image} />
      );
    });

    this.setState({ ducks: itemElements });
  }

  render() {
    return (
      <div>
        {this.state.ducks}
      </div>
    );
  }
}

export default Ducks;
