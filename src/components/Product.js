import React from 'react'
import './Product.css'
import book1 from './book1.jfif'
import { useStateValue } from './StateProvider';

function Product({name,desc,price,img_url}) {
    const [{basket},dispatch] = useStateValue();
    console.log("Items in Basket", basket);
    console.log(img_url);
    const addToBasket = () => {
        //dispath item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                name: name,
                desc: desc,
                price: price,
                img_url: img_url,
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p className="product-name"><b>{name}</b></p>
                <p className="product-desc">{desc}</p>
                <p className="product-price">
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                {/* {Array(rating).fill().map((_,i) => {<p>hi</p>})} */}
            </div>
 

            <div className="product-image">
                <img src={img_url} alt="book"></img>     
            </div>

            <div className="product-add">
                <button onClick={addToBasket}> Add to Basket</button>
            </div>
        </div>
    )
}

export default Product