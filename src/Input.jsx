import React from 'react';

class Import extends React.Component {
   constructor(){
      super();
      this.state={
         text:'',
         tasks:[],
        
          
      }
   }

changeInput=(event)=>{
 
   
this.setState({text:event.target.value,}) 
}

addDescription=()=>{

   let x = [...this.state.tasks]
   x.push(this.state.text)
   
   this.setState({tasks:x,text:''})
}


   render(){

      return(
         <div>
         <input value={this.state.text}  onChange={this.changeInput} />
         <button onClick={this.addDescription}>Click</button>
         <h3>{this.state.tasks}</h3>
         </div>
      )
   }
}
 
export default Import;