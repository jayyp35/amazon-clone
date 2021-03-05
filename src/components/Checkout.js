import React from 'react'
import './Checkout.css'
import Product from './Product'
import Subtotal from './Subtotal'
import amz_checkout_ad from './amz_checkout_ad.png'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <img src={amz_checkout_ad} alt="Checkout Ad"></img>
            <div className="checkout-body">
                <div className="checkout-details">
                    <div className="checkout-title">
                        <h3> Your Shopping Cart </h3>
                    </div>
                    <div className="checkout-products">
                        {basket.map(function(item,index){
                            return <CheckoutProduct
                                id={item.id}
                                name={item.name}
                                desc={item.desc}
                                price={item.price}
                            /> 
                        })}
                    
                    </div>
                </div>

                <div className="checkout-total">
                    <Subtotal/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Checkout
