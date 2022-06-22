import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Venues from './Venues';
import Navigate from './Navigate';
import Events from './Events';
import Artists from './Artists';


function App({selectedEvents}) {

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
                <Venues selectedEvents={selectedEvents}/>
              </Route>
              <Route exact path="/events">
                <Events selectedEvents={selectedEvents}/>
              </Route>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
