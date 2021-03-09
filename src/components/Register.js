import React, { useState } from 'react'
import './Register.css'
import amz_logo_black from './amz_logo_black.png'
import {Link,useHistory} from 'react-router-dom'
import { verify } from 'jsonwebtoken'
import {auth, db} from './firebase'
import { useStateValue } from './StateProvider'

function Register() {
    const [{user},dispatch] = useStateValue();
    let passmatch = true;
    const history = useHistory();
    const[reg,setReg] = useState({
        name:'',
        phone:'',
        address1:'',
        address2:'',
        email:'',
        password:'',
        repassword:'',
    })

    function verify(e) {
        e.preventDefault();
        console.log("IN verify");
        console.log(reg);
        
        if(reg.password == reg.repassword) {
             history.push("/")
             registeruser();
        } else {
            alert("pass mismatch")
            passmatch = false;
        }
    }

    function registeruser() {
        console.log("Registering on firebase");
        auth
        .createUserWithEmailAndPassword(reg.email,reg.password)
        .then((auth) => {
            
            if(auth) {
                console.log("firbase registered");
                storeuserdetails(auth);
                
                dispatch({
                    type:'SET_USER',
                    user: {
                        auth:auth,
                        name:reg.name,
                        phone:reg.phone,
                        email:reg.email,
                        address1:reg.address1,
                        address2:reg.address2,
                    }
                })
            }
        }).catch((err) => {
            alert(err)
        })
    }

    function storeuserdetails(auth) {
        console.log("changing state and writing to doc on fb");
        console.log(auth);

        db.collection('users')
        .doc(auth?.user.uid).collection('userdata').doc('registerdata').set({
            id: auth.user.uid,
            name:reg.name,
            phone:reg.phone,
            email:reg.email,
            address1:reg.address1,
            address2:reg.address2,
        })
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login-logo" src={amz_logo_black} alt="amazon-logo"></img>
            </Link>
            
            <div className="login-container">
                <h1>Sign-in</h1>
                <form className="login-form">
                    <h5>Name</h5>
                    <input type="text" value={reg.name} required onChange={e => setReg({...reg,name:e.target.value})} placeholder="Enter Name"></input>
                    <h5>Phone Number</h5>
                    <input type="text" value={reg.phone} required onChange={e=> setReg({...reg,phone:e.target.value})} placeholder="Enter Number"></input>
                    <h5>Address Line 1</h5>
                    <input type="text" value={reg.address1} required onChange={e=> setReg({...reg,address1:e.target.value})} placeholder="Address line 1"></input>
                    <h5>Address Line 2</h5>
                    <input type="text" value={reg.address2} onChange={e=> setReg({...reg,address2:e.target.value})} placeholder="Address line 2"></input>
                    <h5>Email ID</h5>
                    <input type="email" value={reg.email} required onChange={e=> setReg({...reg,email:e.target.value})} placeholder="Enter email"></input>
                    <h5>Password</h5>
                    <input type="password" value={reg.password} required onChange={e=> setReg({...reg,password:e.target.value})} placeholder="Enter Password"></input>
                    <h5>Password</h5>
                    <input type="password" value={reg.repassword} required onChange={e=> setReg({...reg,repassword:e.target.value})} placeholder="Re Enter Password"></input>
                    <button type="submit" onClick={e => verify(e)}>Create Account</button>
                </form>

            </div>
        </div>
    )
}

export default Register
