import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
  
    const{name,img}=cart;
   
    
   
    return (
        <div>
           
            <div className='cart-info'>
            <img src={img} alt=''></img>
            <h4>{name}</h4>

            
            
            </div>
           
           

        </div>
        
    );
};

export default Cart;