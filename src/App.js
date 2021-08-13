import React from 'react';
import './App.css';
import HomeScreen from "./HomeScreen"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Login';

function App() {
  return (
    <div className="app">
      
      <Router>
        
        <Switch>
          <Route exact path="/clone-netflix/">
            <Login />
          </Route>
          <Route path="/clone-netflix/home/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
