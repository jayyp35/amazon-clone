import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './Home.css'
import Product from './Product'
import { useStateValue } from './StateProvider'

const images = [
    'https://lh3.googleusercontent.com/P7eMUwp9qFLeuOw8hF5hUAXSGIy1_3jMJrDdq1RIQgtwRAHcZ6k3tKsjjcNBhbF8Ht3R7RysoLUnsEwpGk-bbm4TgoVumolBy031f_GmtPCgt5-MDOvaIJ6cM6wtuwxHY4j4rhFn=w2400',
    'https://lh3.googleusercontent.com/ZtgIw-Qg-RD5TJl5H4lgL32ArZHRqldqhy_RlIPq2g513Nh-a9O9ZVOyUAzplSC_JcAauzAm86_oxm4CHw0Wjo5M6P9FR-cHO_5_GMjgxk9olGUXns7M-WYhjD1QHHETHpeXAEh4=w2400',
    'https://lh3.googleusercontent.com/sPD79imf9IxeOdF592R8JgV6OUfuZEE-u-supcGWORQRXhpEG4EBefQ1my_JbZ69AAI_JFlOdWaDTj4rBGDRW0KBq7u55LMQYGQuzibwfXWCIik7h5Xzp2EJVCxpx9kr0dtDX4Wl=w2400',
    'https://lh3.googleusercontent.com/xawpAyXHhm50Ayc2tgh5xRpt19GMHj89MjRdWTCw_MWATSQWk02vXZDKGLrQMEBTL7ZPF02pQi7tgGhsrAhJbWd9TUrBNfAMgDNHgJ3xiSrfHzAWaWemqPTvCYzrRLyvMWGRMyhr=w2400',
    'https://lh3.googleusercontent.com/P7eMUwp9qFLeuOw8hF5hUAXSGIy1_3jMJrDdq1RIQgtwRAHcZ6k3tKsjjcNBhbF8Ht3R7RysoLUnsEwpGk-bbm4TgoVumolBy031f_GmtPCgt5-MDOvaIJ6cM6wtuwxHY4j4rhFn=w2400'
]

function Home() {
    const [{user,books,electronics,tv}] = useStateValue()   

 
    return (
        <div className="home">
            <div className="home-container">
                <figure>
                <img className="home-img-ad" src={images[0]} alt="Prime AD"></img>
                <img className="home-img-ad" src={images[1]} alt="Prime AD"></img>
                <img className="home-img-ad" src={images[2]} alt="Prime AD"></img>
                <img className="home-img-ad" src={images[3]} alt="Prime AD"></img>
                <img className="home-img-ad" src={images[4]} alt="Prime AD"></img> 
                </figure>               
            </div>

            <div className="home-row">
                {books && books.map((book,index) => <Product id={book.id} name={book.name} desc={book.desc} price ={book.price} img_url={book.img_url}/>)}
            </div>
            <div className="home-row">
                {electronics && electronics.map((elec,index) => <Product id={elec.id} name={elec.name} desc={elec.desc} price ={elec.price} img_url={elec.img_url}/>)}
            </div>
            <div className="home-row">
                {tv && tv.map((t,index) => <Product id={t.id} name={t.name} desc={t.desc} price ={t.price} img_url={t.img_url}/>)}
            </div>
        </div>
    )
}

export default Home
