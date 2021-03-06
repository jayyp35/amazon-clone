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
import Register from './components/Register';


function App() {
  const [{user},dispatch] = useStateValue();
  console.log("reloading");
  console.log("user ye tha",user);
  const [data,gotData] = useState(false);
  
  let obj
  
  
  useEffect(() => {
      
      //Runs once when app component loads
      auth.onAuthStateChanged(authUser => {
      
        if(authUser) {
          //user is logged in
          console.log("App reloaded signing in again as",authUser);
          dispatch({
            type:'SET_USER',
              auth: authUser
            }
          )

        } else {
          //user is logged out
          dispatch({
            type:'SET_USER',
            user: null
          })
        }
      })

      
      const docRef = db.collection('store').doc('products')
        const docu = docRef.get()
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

        <Route path='/register'>
          <Register/>
        </Route>


      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
