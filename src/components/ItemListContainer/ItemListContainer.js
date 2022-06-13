import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'


export default function ItemListContainer(props) {
    return(
    <>
        <div className='saludo'>{props.saludo}</div>
        <ItemCount initial={0} stock={10}/>
    </>
    )
}
