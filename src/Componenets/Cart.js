import React from 'react';
import './Cart.css'

const Cart = ({cart,removeCart}) => {
    console.log(cart)
    return (
        <div>
            <h1>This is Cart</h1>

            <h5 className={cart.length===3?"orange":"red"}>Order Quantity:{cart.length}</h5>

{
    cart.length===0&&<p>Please BUY Items</p>
}
            {

                cart.map(tshirt=><p>{tshirt.name}
                
                <button onClick={()=>removeCart(tshirt)}>Remove</button>
                </p>)
                
            }
           
        </div>
    );
};

export default Cart;