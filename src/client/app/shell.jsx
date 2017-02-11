import React, { Component } from 'react';

class Shell extends Component {

    constructor(props) {
        super(props);
        this.state = { name: 'The Duck Shop' };
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Shell;