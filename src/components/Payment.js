import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import './Payment.css'
import Subtotal from './Subtotal';

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment-info">
                <div className="payment-title">
                    <div><strong>Name: </strong></div>
                    <div><strong>Phone Number: </strong></div>
                    <div><strong>Email Address: </strong></div>
                    <div><strong>Delivery Address: </strong></div>
                    
                </div>
                <div  className="payment-data">
                    <div>Name</div> 
                    <div>8587013931</div>
                    <div>{user.email}</div>
                    <div>E5/68 , Sector-16, Rohini, New Delhi</div>
                </div>
            </div>

            <div className="payment-total">
                <p>Subtotal ({basket.length} items): <strong>$100.00</strong></p>
            </div>

            <div className="payment-card">
                <h3>Enter Card Details</h3>
                <div className="payment-card-details">
                    <div className="payment-card-details-cardnum">
                        <strong>Card Number</strong>
                        <input type="text" placeholder="XXXX-XXXX-XXXX"></input>
                    </div>
                    <div className="payment-card-details-cvv">
                        <strong>CVV</strong>
                        <input type="text" placeholder="XXX"></input>
                    </div>
                    <div className="payment-card-details-exp">
                        <strong>Exp</strong>
                        <input type="text" placeholder="MM/YY"></input>
                    </div>
                </div>

                <button className="payment-button">Pay</button>
            </div>
            
        </div>
    )
}

export default Payment
