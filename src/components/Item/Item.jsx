import React from 'react';
import './item.css';


const Item = ({ item }) => {
    return (
            <div className='cardSaku'>
                <div className='imgSaku'>
                    <img src={item.img} alt="" width="200" />
                </div>
                <div className='captionSaku'>
                    <h2>{item.name}</h2>
                    <h2>$ {item.price}</h2>
                </div>
            </div>
      
    );
};
export default Item;
