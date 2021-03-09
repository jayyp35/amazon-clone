import React, { useState } from 'react'
import amz_logo_black from './amz_logo_black.png'
import {Link,useHistory} from 'react-router-dom'
import './LoginBox.css'
import {auth} from './firebase'

function LoginBox() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); //prevents refresh

        //firebase signIn
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        }).catch(error => {
            alert(error)
        })
    }

    const register = e => {
        e.preventDefault(); //prevents refresh
        history.push('/register')
        
    }

    return ( 
        <div className="login">
            <Link to='/'>
            <img className="login-logo" src={amz_logo_black} alt="amazon-logo"></img>
            </Link>
            
            <div className="login-container">
                <h1>Sign-in</h1>
                <form className="login-form">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Username"></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder="Enter Password"></input>
                    <button type="submit" onClick={signIn}>Sign in</button>
                </form>

                <p className="terms-text">
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register}>Create a new Account</button>
            </div>
        </div>
    )
}

export default LoginBox
