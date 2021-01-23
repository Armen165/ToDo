import React, { Component } from 'react';


class Price extends Component {
   
   
    render() {
        const{color,price,icon,engine}=this.props

        return (
            <div>
                 <div>{icon}</div>
           <div>{price}</div>
           <div>{color}</div>
           <div>{engine}</div>
          

            </div>
        )
    }
}



export default Price;


