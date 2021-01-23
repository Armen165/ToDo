import React from 'react';
import { Counter } from './Counter';
import ToDo from './homework/components/ToDo';
import Product from './homework/Product';
import Import from './folder/Input copy'

let cars = [
    {
        icon: '👍',
        model: 'bmw',
        price: '20000$',
        color: 'black',
        engine: 'V8'
    },
    {
        icon: '✌',
        model: 'mercedes',
        price: '17000$',
        color: 'white',
        engine: 'V8',
    },
    {
        icon: '✔',
        model: 'RangeRover',
        price: '17000$',
        color: 'white',
        engine: 'V8',
    },
    {
        icon: '👓',
        model: 'ford mustang',
        price: '27000$',
        color: 'blue',
        engine: 'V8 5.2l',
    },

]
let cars2 = [...cars];

let changeCurrency = ()=>{
    let dollar=cars2[0].price;
    let clear=parseFloat(dollar);
  return   dollar.includes('$')?dollar=clear*500+'amd':dollar=clear/500+'$';

}
let k = changeCurrency()
cars2[0].price=k

function App() {
    let carType = cars.map((item, index) => {
        return <li key={index}>
            <Product
                icon={item.icon}
                model={item.model}
                price={item.price}
                color={item.color}
                engine={item.engine} />
        </li>
    })

    return (
        <div>
           <Conditional/>
            <Import />
            {/* <Counter name={'google'}/> */}
            {/* <Product name='banan' price='40000AMD' description='Made in China' /> */}
            {/* <Counter  />  */}
            {/* <ToDo  name={'bmw'}/> */}
        </div>
    )
}



export default App;
