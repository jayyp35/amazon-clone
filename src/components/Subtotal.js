import React from 'react'
import './Subtotal.css'

function Subtotal() {
    return (
        <div>
            <div className="subtotal-card">
                <p>Subtotal (2 items): <strong>$100.00</strong></p> 
                <small><input className="subtotal-gift" type="checkbox"/>This order contains a gift</small>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
