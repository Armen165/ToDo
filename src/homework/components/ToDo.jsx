import React, { Component } from 'react';

class ToDo extends Component {
     state={
         inputValue:'',
         tasks:[]
     }

     handleChange=(event)=>{
         this.setState({inputValue:event.target.value})
           
     }
     

    render(){
        const {tasks}=this.state; 

        const taskComponents=tasks.map((task,index)=>{
            return <li key={index}>{task}</li>
        })
        
        return (
    
        <>
         <p>ToDo list</p>
         <input type='text' onChange={this.handleChange} />
         <button >Click</button>
         <h3>{this.show()}</h3>
         <ol>
            {taskComponents}
         </ol>
        </>

        )
    }
}
export default ToDo;


