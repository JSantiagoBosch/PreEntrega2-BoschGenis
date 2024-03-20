import cart from './assets/cart.svg'
import './CartWidget.css'

export default function CartWidget() {
    return (
        <div className='estiloCart'>
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}