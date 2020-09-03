import React from 'react';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            Checkout
          </Route>
          <Route path="/login">
            Login
          </Route>
          <Route path="/">
            Home Screen
          </Route>
        </Switch>        
        </Router>
      </div>  
  );
}

export default App;
