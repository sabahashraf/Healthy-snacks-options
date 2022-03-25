import React, { useEffect, useState } from 'react';
import Snack from '../Snack/Snack';
import './Container.css';

const Container = () => {
    const[snacks,setSnacks]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setSnacks(data)
        })
    },[])
    return (
        <div>
            <h1>Healthy Snacks Options</h1>
            <div className='container'>
                <div className='snacks-container'>
                    {
                        snacks.map(snack=><Snack
                        snack={snack}
                        key={snack.id}></Snack>
                            )
                    }
                </div>
                <div className='cart-container'>
                    All cart items
                </div>
            </div>
        </div>
    );
};

export default Container;