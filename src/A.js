import React, { Component } from 'react';
import B from './B'
import C from './C';
class A extends Component {
    // state = {
    //     text:''
    // }
    // handleChange=(event)=>{
    //     this.setState({text:event.target.value})
    // }
    render() { 
        return (
            <div>
                {/* <input type='text'  onChange ={this.handleChange}/> */}  
                <C onSendValue = {(param)=>{ console.log(param) }}/>
                {/* <B value = {this.state.text} */}

            </div>
        )

    }
}
export default A;
