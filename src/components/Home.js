import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from './Product'

const images = [
    'https://lh3.googleusercontent.com/P7eMUwp9qFLeuOw8hF5hUAXSGIy1_3jMJrDdq1RIQgtwRAHcZ6k3tKsjjcNBhbF8Ht3R7RysoLUnsEwpGk-bbm4TgoVumolBy031f_GmtPCgt5-MDOvaIJ6cM6wtuwxHY4j4rhFn=w2400',
    'https://lh3.googleusercontent.com/ZtgIw-Qg-RD5TJl5H4lgL32ArZHRqldqhy_RlIPq2g513Nh-a9O9ZVOyUAzplSC_JcAauzAm86_oxm4CHw0Wjo5M6P9FR-cHO_5_GMjgxk9olGUXns7M-WYhjD1QHHETHpeXAEh4=w2400',
    'https://lh3.googleusercontent.com/sPD79imf9IxeOdF592R8JgV6OUfuZEE-u-supcGWORQRXhpEG4EBefQ1my_JbZ69AAI_JFlOdWaDTj4rBGDRW0KBq7u55LMQYGQuzibwfXWCIik7h5Xzp2EJVCxpx9kr0dtDX4Wl=w2400',
    'https://lh3.googleusercontent.com/xawpAyXHhm50Ayc2tgh5xRpt19GMHj89MjRdWTCw_MWATSQWk02vXZDKGLrQMEBTL7ZPF02pQi7tgGhsrAhJbWd9TUrBNfAMgDNHgJ3xiSrfHzAWaWemqPTvCYzrRLyvMWGRMyhr=w2400',
    'https://lh3.googleusercontent.com/zv4GnwiPPogXl3G5UyUQG4Eg2wdtKrzbFwKOxxrrGgqRPuJcGqP7U93i4cYKKYZpzBg_tAluuM7wXy_uywMncvC6HSJVFQtgaPJ0aSrhQKSC9ynZd12gxjvq1BxzGbQCjsMJgFQV=w2400'
]
let i = 0
function Home() {
    
    const [imgurl,seturl] = useState(images[i])
    useEffect(()=> {
       
        const f = setInterval(()=>{
            i=(i+1)%5
            seturl(images[i])
        },8000)

        return () => {
            clearInterval(f)
        }
    })
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-img-ad" src={imgurl} alt="Prime AD"></img>
            </div>

            <div className="home-row">
                <Product id="000001" name="Book of Genesis" desc="The best book that tells you everything about the bible" price ={19.99} rating={4}/>
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
