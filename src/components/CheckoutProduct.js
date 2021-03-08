import React from 'react'
import book2 from './book1.jfif'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,name,desc,price,img_url}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkout-product">

            <div className="checkout-product-image">
                <img src={img_url} width="100" alt="book"></img>     
            </div>

            <div className="checkout-product-info">
                <p className="checkout-product-name"><b>{name}</b></p>
                <p className="checkout-product-desc">{desc}</p>
                <p className="checkout-product-price">
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                <p><button onClick={removeFromBasket}>Remove from Cart</button></p>
            </div>
        </div>
    )
}

export default CheckoutProduct
