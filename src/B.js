import React, { Component } from 'react';

class B extends Component {
    state = {
        text:''
    }
    render() {
        return (
            <div>
             <h2>{this.props.value}</h2>

            </div>
        )

    }
}
export default B
