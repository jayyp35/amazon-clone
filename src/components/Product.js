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
                <p className="product-price">
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                {/* {Array(rating).fill().map((_,i) => {<p>hi</p>})} */}
            </div>
 

            <div className="product-image">
                <img src="https://lh3.googleusercontent.com/3w2m6cnwkQMgfmBddI7PIRRiZK6nD-84d3-Kl1Lm7FGLMWu1Jr0QR-OFJPkg2c-sSm7oOdEJZfaplGn9Wz6pmi4hifisWAwVeGWHFTBfFDSN2C4KHoSi9T_x63coYYqkkpScpfPX=w2400" alt="book"></img>     
            </div>

            <div className="product-add">
                <button onClick={addToBasket}> Add to Basket</button>
            </div>
        </div>
    )
}

export default Product