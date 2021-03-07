import React, { useState,useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import './Payment.css'
import {Link,useHistory} from 'react-router-dom'
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios'

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();
    //stripe
    const stripe= useStripe();
    const elements = useElements();

    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(()=>{
        //generate special stripe secret to allow us to charge customer
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url:`/payments/create?total=100`
            })
            setClientSecret();
        }
        getClientSecret();
    },[basket])

    const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent is the payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false)

            history.replace('./orders')
        })
        
    }

    const handleChange = (event) => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }


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
                <h4>Enter Card Details</h4>
                
                <div className="payment-card-details">
                    <div className="payment-card-field">
                        <form onSubmit={handleSubmit}>
                            <CardElement  onChange={handleChange}/>

                            <button disabled={processing || disabled || succeeded} className="payment-button">
                                <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                            </button>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

                
            </div>
            
        </div>
    )
}

export default Payment
