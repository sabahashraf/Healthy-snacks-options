import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Snack from '../Snack/Snack';
import './Container.css';

const Container = () => {
    const[snacks,setSnacks]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setSnacks(data))
        
    },[])
    const handleAddToCart=snack=>{

       
       
        const newCart=[...cart,snack];

        if(newCart.length <=4){
            setCart(newCart);
        }
        else{
            alert('sorry you cannot choose more than four items');
        }
        
       
    }
    const chooseOne=cart=>{
      console.log(cart);
        
        const random = Math.floor((Math.random() * 3) + 1);

     
      setCart([cart[random]]);
        

    }
    const chooseAgain=cart=>{
        setCart([]);
    }
    return (
        <div>
            <h1>Healthy Snacks Options</h1>
            <div className='container'>
                <div className='snacks-container'>
                    {
                        snacks.map(snack=><Snack
                        snack={snack}
                        key={snack.id}
                        handleAddToCart={handleAddToCart}></Snack>
                            )
                    }
                </div>
                <div className='cart-container'>
                <h3>Selected Snacks</h3>
                    {
                        cart.map(item=><Cart
                            cart={item}
                            key={item.id}></Cart>)
                           
                    }
                     <button onClick={()=>chooseOne(cart)}className='btn-choose'>Choose 1 for me</button>
                     <button onClick={()=>chooseAgain(cart)}className='btn-choose'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Container;