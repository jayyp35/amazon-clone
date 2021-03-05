import React from 'react'
import './Product.css'
import book1 from './book1.jfif'

function Product({name,desc,price,rating}) {
    return (
        <div className="product">
            <div className="product-info">
                <p className="product-name"><b>{name}</b></p>
                <p className="product-desc">{desc}</p>
                <p className="producr-price">
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                {Array(rating).fill().map((_,i) => {<p>hi</p>})}
            </div>


            <div className="product-image">
                <img src={book1}></img>     
            </div>

            <div className="product-add">
                <button> Add to Basket</button>
            </div>
        </div>
    )
}

export default Product