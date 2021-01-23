import React, { Component } from 'react';
import Price from './Price';
import Name from './Name';

class Product extends Component {

    render() {

        const{price,color,engine,icon}=this.props

        return (
            <>
              <Name model={this.props.model}/>
              <Price price={price} color={color} engine={engine} icon={icon}/>

            </>
        )
    }
}

export default Product;


