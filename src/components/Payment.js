import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import './Payment.css'
import { Link, Redirect, useHistory } from 'react-router-dom';


function Payment() {
    const [{basket,user}] = useStateValue();
    const history = useHistory();
    
    const [inputs,setInputs] = useState({
        cardnum: null,
        exp: null,
        cvv: null
    })

    function initiatePayment() {
        console.log("Payment Initiated");
        setTimeout(() => {
            history.push('/orders')
        }, 2000);
    }

    return (
        <div className="payment">
            <div className="payment-info">
                    <div className="payment-info-item"><strong>Name: </strong>Name</div>
                    <div className="payment-info-item"><strong>Phone Number: </strong>8587013931</div>
                    <div className="payment-info-item"><strong>Email Address: </strong>{user && user.email}</div>
                    <div className="payment-info-item"><strong>Delivery Address: </strong>E5/68 , Sector-16, Rohini, New Delhi</div>
            </div>

            <div className="payment-total">
                <p>Subtotal ({basket.length} items): <strong>$100.00</strong></p>
            </div>

            <div className="payment-card">
                <h4>Enter Card Details</h4>
                
                <div className="payment-card-details">
                    <div className="payment-card-field">
                        <form>
                            <div>Card Number </div>
                            <input value={inputs.cardnum} className="payment-card-num" onChange={(e) => {setInputs({cardnum:e.target.value})}} placeholder="XXXX-XXXX-XXXX-XXXX" required/>
                            <div>Exp</div>
                            <input value={inputs.exp} className="payment-card-exp" onChange={(e) => {setInputs({exp:e.target.value})}} placeholder="MM/YY" required/>
                            <div>CVV</div>
                            <input value={inputs.cvv} className="payment-card-cvv" onChange={(e) => {setInputs({cvv:e.target.value})}} placeholder="XXX" required/>
                        </form>
                    </div>
                    
                </div>
                
                <button onClick={initiatePayment} className="payment-button">Pay</button>
                
                
            </div>
            
        </div>
    )
}

export default Payment
