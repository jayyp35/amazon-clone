import React from 'react'
import book2 from './book1.jfif'
import './CheckoutProduct.css'

function CheckoutProduct({id,name,desc,price,rating}) {
    return (
        <div className="checkout-product">

            <div className="checkout-product-image">
                <img src={book2} alt="book"></img>     
            </div>

            <div className="checkout-product-info">
                <p className="checkout-product-name"><b>{name}</b></p>
                <p className="checkout-product-desc">{desc}</p>
                <p className="checkout-product-price">
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                <p><button>Remove from Cart</button></p>
                {/* {Array(rating).fill().map((_,i) => {<p>hi</p>})} */}
            </div>
        </div>
    )
}

export default CheckoutProduct
