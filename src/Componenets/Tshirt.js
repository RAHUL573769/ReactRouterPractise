import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt, handleAddToCart}) => {
  
   const{name,picture,price}=tshirt;
    return (
        <div className='t-shirt'>
       

       <img src={picture} alt="" />

<h2>Name:{name}</h2>
<h4>Price:{price}</h4>

<button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;