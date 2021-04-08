import React, { Component } from 'react';

class C extends Component {

    handleChange=(value)=>{
        this.props.onSendValue()
    }
  
    render() {
        return (
            <div>

             <input type='text' onChange = {this.handleChange}/>
        

            </div>
        )

    }
}
export default C;
