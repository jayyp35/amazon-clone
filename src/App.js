import React,{useEffect, useState} from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginBox from './components/LoginBox'
import { auth, db } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Loading from './components/Loading';


function App() {
  const [{},dispatch] = useStateValue();
  const [data,gotData] = useState(false);
  let obj
  useEffect(() => {
      //Runs once when app component loads
      auth.onAuthStateChanged(authUser => {
      
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

      
      const cityRef = db.collection('store').doc('products')
        const docu = cityRef.get()
        docu.then((docu)=> {
           obj = docu.data() 
          console.log("loaded",obj);
          gotData(true)
           dispatch({
             type:'SET_STORE',
             books:obj.books,
             electronics:obj.electronics,
             tv:obj.tv,
           })

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
          {data? <Home/>:<Loading/>}
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
