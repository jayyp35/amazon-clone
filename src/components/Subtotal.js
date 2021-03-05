import React from 'react'
import { useStateValue } from './StateProvider';
import './Subtotal.css'

function Subtotal() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div>
            <div className="subtotal-card">
                <p>Subtotal ({basket.length} items): <strong>$100.00</strong></p> 
                <small><input className="subtotal-gift" type="checkbox"/>This order contains a gift</small>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
