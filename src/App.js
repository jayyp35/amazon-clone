import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Switch>
        
        <Route path='/' exact>
          <Home/>
        </Route>

        <Route path='/checkout'>
          <Checkout/>
        </Route>

      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
