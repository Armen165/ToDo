import React,{Component}from 'react';


class Counter  extends Component{
 constructor(){
     super()
     this.state={
         value:0
     }
 }

 clickPlus=()=>{
  this.setState({value:this.state.value+1})
 }

 clickMinus=()=>{
   this.setState({value:this.state.value-1})

 } 

 render(){
     return(
         <div>
             <p>{this.state.value}</p>
             <button onClick={this.clickPlus}> Plus</button>
             <button onClick={this.clickMinus} >Minus</button>
        </div>
     )
 }

}
 

export {Counter}  