import React from 'react'
import './Checkout.css'
import Product from './Product'
import Subtotal from './Subtotal'
import amz_checkout_ad from './amz_checkout_ad.png'

function Chekcout() {
    return (
        <div className="checkout">
            <img src={amz_checkout_ad} alt="Checkout Ad"></img>
            <div className="checkout-body">
                <div className="checkout-details">
                    <div className="checkout-title">
                        <h3> Your Shopping Cart </h3>
                    </div>
                    <div className="checkout-products">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>

                <div className="checkout-total">
                    <Subtotal/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Chekcout
