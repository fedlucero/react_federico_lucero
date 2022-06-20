import React from 'react'
const ItemDetail = ({item}) => {
    const { id ,type, title, description, regularPrice, picture1Url } = item

    return (

        
        <>
        
                <div className='contenedor'>
                    <div className='contenedorTituloDescripcion'>
                        <h1>{type}</h1>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className='contenedorImg'>
                        <img src={picture1Url} alt="" width="200" />
                    </div>
                    <div className='contenedorPrecio'>
                        <h2 subtitle>$ {regularPrice}.00</h2>
                    </div>
                </div>
        
        </>
    )
}

export default ItemDetail