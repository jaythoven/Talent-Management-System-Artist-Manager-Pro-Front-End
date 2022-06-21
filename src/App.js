import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Navigate from './Navigate';
import Events from './Events';
import Profile from './Profile';


function App() {

  return (
    <Router>
      <div className="App">Hello
        <Navigate className="App-header"/>
        <header >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/events">
                <Events />
              </Route>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
