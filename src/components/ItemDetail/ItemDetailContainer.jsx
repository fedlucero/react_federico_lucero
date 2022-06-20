import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    useEffect(() => {
        const getItem = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve([
                
                    {id: 'sakura#01', type: 'Generative', title: 'Sakura 01', description: 'Generative art tree', regularPrice: 10, picture1Url: 'https://res.cloudinary.com/dmipkkvkw/image/upload/v1655319303/02_vobuqk.png'}
                ]);
            }, 2000);
        });

        getItem
            .then((result) => {
                setItem(result[0]);
            });
    }, [])

    return (
        <>
            {item ? <ItemDetail item={item} /> : console.log('item undefined') }
        </ >
    )
}

export default ItemDetailContainer