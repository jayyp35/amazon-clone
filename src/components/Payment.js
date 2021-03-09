import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import './Payment.css'
import { Link, Redirect, useHistory } from 'react-router-dom';


function Payment() {
    const [{basket,user}] = useStateValue();
    const history = useHistory();
    
    const [inputs,setInputs] = useState({
        cardnum: '',
        exp: '',
        cvv: '',
    })

    function initiatePayment() {
        console.log("Payment Initiated");
        setTimeout(() => {
            history.push('/orders')
        }, 1000);
    }

    return (
        <div className="payment">
            <div className="payment-info">
                    {!user.auth && <p className="payment-info-warn"><small>Please sign-in to continue</small></p>}
                    <div className="payment-info-item"><strong>Name: </strong>{user? user.name:''}</div>
                    <div className="payment-info-item"><strong>Phone Number: </strong>{user? user.phone:''}</div>
                    <div className="payment-info-item"><strong>Email Address: </strong>{user? user.email:''}</div>
                    <div className="payment-info-item"><strong>Delivery Address: </strong>{user? (user.address1+" " +user.address2):'' }</div>
                    
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
