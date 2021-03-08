import React, { useEffect } from 'react'
import { db } from './firebase'
import { useStateValue } from './StateProvider'

function Orders() {
    const [{user,basket}] = useStateValue();
    
    useEffect( () => {
        db
    .collection('users')
    .doc(user?.uid)
    .collection('orders')
    .doc('paymentID')
    .set({
        baske: basket,
        amount: '$100',
        createdAt: new Date()
    })
    }   ,[])
    
    


    return (
        <div>
           Your Orders 
        </div>
    )
}

export default Orders
