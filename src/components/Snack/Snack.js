import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Snack.css';

const Snack = (props) => {
    const {snack,handleAddToCart}=props;
    const{price,img,name}=snack;
    return (
        <div className='card'>
            <img src={img} alt=''></img>
            <div className='card-info'>
            <h4>{name}</h4>
            <p>Price:{price}/lb</p>
            </div>
            <button onClick={()=>{handleAddToCart(snack)}}className='btn'><p style={{marginRight:'7px'}}>Add to cart</p>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>

            
        </div>
    );
};

export default Snack;