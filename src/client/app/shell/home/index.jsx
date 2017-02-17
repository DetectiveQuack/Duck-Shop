import React, { Component } from 'react';

import Container from '../../components/container';
import Data from '../../services/data';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  async componentWillMount() {
    await this.populateItems();
  }

  async populateItems() {
    const data = await Data.getData();

    const itemElements = data.map(item => (
      <Container description={item.description} price={item.price} key={Symbol(item.description).toString()} />
    ));

    this.setState({ data: itemElements });
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }

}

export default Home;
