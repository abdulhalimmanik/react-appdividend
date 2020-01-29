import React, { Component } from 'react';

class InitialState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'AppDividend'
        };
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}

export default InitialState;