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
        console.log(newCart);
        setCart(newCart);
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
                </div>
            </div>
        </div>
    );
};

export default Container;