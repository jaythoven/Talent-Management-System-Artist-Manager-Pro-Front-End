import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Venues from './Venues';
import Navigate from './Navigate';
import Events from './Events';
import Artists from './Artists';


function App() {

  return (
    <Router>
      <div className="App">
        <Navigate className="App-header"/>
        <header >
            <Switch>
              <Route exact path="/artists">
                <Artists />
              </Route>
              <Route exact path="/venues">
                <Venues />
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
