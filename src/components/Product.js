import React from 'react'
import './Product.css'
import book1 from './book1.jfif'
import { useStateValue } from './StateProvider';

function Product({id,name,desc,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    console.log("Items in Basket", basket);
    const addToBasket = () => {
        //dispath item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                name: name,
                desc: desc,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p className="product-name"><b>{name}</b></p>
                <p className="product-desc">{desc}</p>
                <p className="producr-price">
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                {/* {Array(rating).fill().map((_,i) => {<p>hi</p>})} */}
            </div>


            <div className="product-image">
                <img src={book1} alt="book"></img>     
            </div>

            <div className="product-add">
                <button onClick={addToBasket}> Add to Basket</button>
            </div>
        </div>
    )
}

export default Product