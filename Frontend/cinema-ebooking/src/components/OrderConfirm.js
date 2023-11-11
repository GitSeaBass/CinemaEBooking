import './OrderConfirm.css'
import { Link } from 'react-router-dom'

function OrderConfirm() {
    return (
        <div className='OrderConfirm-confirm-window'>
            <h3>Your order has been confirmed.</h3>
            <Link to='/customerpage' className='OrderConfirm-return-home'>Return Home</Link>
        </div>
    )
}

export default OrderConfirm;