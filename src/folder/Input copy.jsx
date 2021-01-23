import React from 'react';

class Import extends React.Component {
   constructor(){
      super();
      this.state={
         text:'',
         textValue:[],
          
      }
   }

changeInput=(event)=>{

   
this.setState({text:event.target.value}) 
}

addDescription=()=>{
let x = this.state.text;
let z = [...this.state.textValue]
 
z.push(x)   
   this.setState({textValue:z,text:''})
}


   render(){

      return(
         <div>
         <input value={this.state.text} onChange={this.changeInput} />
         <button onClick={this.addDescription}>Click</button>
         <h3>{this.state.textValue}</h3>
         </div>
      )
   }
}
 
export default Import;