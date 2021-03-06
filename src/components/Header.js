import React from 'react'
import './Header.css'
import amazonnavlogo from './amz_navlogo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to='/'>
            <img className="header-logo" src={amazonnavlogo} alt="amazon"></img>
            </Link>
            <div className="header-search">
                <input className="header-search-input" type="text"></input>
                <SearchIcon className="header-search-icon"/>
            </div>

            <div className="header-nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header-option">
                    <span className="header-option-one">Hello</span>
                    <span className="header-option-two"><b>{user? 'Sign Out' : 'Sign in'}</b></span>
                </div>
                </Link>
                <div className="header-option">
                    <span className="header-option-one">Returns</span>
                    <span className="header-option-two"><b>& Orders</b></span>
                </div>
                <div className="header-option">
                    <span className="header-option-one"><b>Your</b></span>
                    <span className="header-option-two"><b>Prime</b></span>
                </div>
                <div className="header-option">
                    <Link className="cart-link" to='/checkout'>
                    <span className="header-cart-count">{basket.length}</span>
                    <br/>
                    <span className="header-cart-icon"><ShoppingCartIcon/></span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header;
