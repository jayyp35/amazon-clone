import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Subtotal.css'

function Subtotal() {
    const history = useHistory()
    const [{user,basket,basketTotal}] = useStateValue();
    const[noUser,setnoUser] = useStateValue(false);

    useEffect(() => {
        console.log("useeffect of subt");
    })


    function goToPayment() {
        console.log("gotopayment chala");
        if(user.auth) {
            history.push('/payment')
        }
    }
    console.log(noUser);
    return (
        <div>
            <div className="subtotal-card">
                <p>Subtotal ({basket.length} items): <strong>$ {basketTotal}</strong></p> 
                <small><input className="subtotal-gift" type="checkbox"/>This order contains a gift</small>
                <button onClick={goToPayment}>Proceed to Checkout</button>
                {!user.auth && <p className="sign-in-warning"><small>Please Sign-in/Register to proceed to payment</small></p>}
            </div>
        </div>
    )
}

export default Subtotal
