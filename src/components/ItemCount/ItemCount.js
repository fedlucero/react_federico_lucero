import React, { useState } from 'react'

export default function ItemCount({initial, stock}) {
    
    const [qty, setQty] = useState(initial)

    const onAdd = (qty) => {
        alert(`Has agregado ${qty} al carrito`)
    }

    const Add = (num) => {
        setQty(qty + num);
    }

  return (
    <div>
        <div>
            <button
            onClick={() => Add(-1)}
            disabled={qty === initial ? true : null}>-</button>
            <span>{qty}</span>
            <button
            onClick={() => Add(+1)}
            disabled={qty === stock ? true : null}>+</button>
        </div>
        <div>
            <button
            onClick={() => onAdd(qty)}
            disabled={stock === 0 ? true :  null}
            >Añadir al carrito</button>
        </div>
    </div>
  )
}
