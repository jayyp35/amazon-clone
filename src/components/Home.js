import React from 'react'
import amz_home_1 from './amz_home_1.png'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-img-ad" src={amz_home_1} alt="Prime AD"></img>
            </div>

            <div className="home-row">
                <Product name="Book of Genesis" desc="The best book that tells you everything about the bible" price ={19.99} rating={4}/>
                <Product/>
            </div>
            <div className="home-row">
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className="home-row">
                <Product/>
            </div>
        </div>
    )
}

export default Home
