import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt';

import Cart from './Cart';
import './Home.css'
const Home = () => {

    const[cart,setCart]=useState([]);
const handleAddToCart=(data)=>{
console.log(data);
    const exists=cart.find(ts=>ts._id===data._id);

    if(exists){
        alert("Tshirt already Added");
    }
    else{
        const newCart=[...cart,data];
        setCart(newCart);
alert("Succesfully Added");        
    }


}
const removeCart=(fcart)=>{

const remaining=cart.filter(ts=>ts._id!==fcart._id);
setCart(remaining);


}
    const tshirts=useLoaderData();
    return (
        
        <div className='home-container'>

        <div className="product-container">

            {
tshirts.map(tshirt=><Tshirt  key={tshirt._id}  handleAddToCart={handleAddToCart}tshirt={tshirt}></Tshirt>)
} 


        </div>
       
      <div  className='cart-container'>
<Cart cart={cart} removeCart={removeCart} ></Cart>

      </div>
  
        </div>
    );
};

export default Home;