import React from 'react'
import './Header.css'
import amazonnavlogo from './amz_navlogo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img className="header-logo" src={amazonnavlogo} alt="amazon"></img>

            <div className="header-search">
                <input className="header-search-input" type="text"></input>
                <SearchIcon className="header-search-icon"/>
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-one">Hello</span>
                    <span className="header-option-two"><b>Sign in</b></span>
                </div>
                <div className="header-option">
                    <span className="header-option-one">Returns</span>
                    <span className="header-option-two"><b>& Orders</b></span>
                </div>
                <div className="header-option">
                    <span className="header-option-one"><b>Your</b></span>
                    <span className="header-option-two"><b>Prime</b></span>
                </div>
                <div className="header-option">
                    <span className="header-cart-icon"><ShoppingCartIcon/></span>
                </div>

            </div>
        </div>
    )
}

export default Header;
