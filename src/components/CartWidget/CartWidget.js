import cart from '../img/cart.svg';
import './CartWidget.css'

export default function CartWidget() {
    return(
    <li><img src={cart} alt="Carrito" className='cart'/></li>
    )
}
