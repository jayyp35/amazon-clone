import React,{useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginBox from './components/LoginBox'
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import Orders from './components/Orders';


function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
      //Runs once when app component loads
      auth.onAuthStateChanged(authUser => {
        console.log("User is " ,authUser)

        if(authUser) {
          //user is logged in
          dispatch({
            type:'SET_USER',
            user: authUser
          })

        } else {
          //user is logged out
          dispatch({
            type:'SET_USER',
            user: null
          })
        }
      })
    } 
  ,[])


  return (
    <Router>
      <div className="App">
      
      <Switch>
        <Route path='/login' exact>
          <LoginBox/>
        </Route>
        
        <Route path='/' exact>
          <Header/> 
          <Home/>
        </Route>

        <Route path='/checkout'>
          <Header/>
          <Checkout/>
        </Route>

        <Route path='/payment'>
          <Header/>
          <Payment/>

        </Route>

        <Route path='/orders'>
          <Header/>
          <Orders/>
        </Route>

      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
