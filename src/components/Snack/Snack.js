import React from 'react';
import './Snack.css';

const Snack = (props) => {
    const {snack}=props;
    const{price,img,name}=snack;
    return (
        <div className='card'>
            <img src={img} alt=''></img>
            <div className='card-info'>
            <h5>{name}</h5>
            <p>Price:${price}/lb</p>
            </div>

            
        </div>
    );
};

export default Snack;