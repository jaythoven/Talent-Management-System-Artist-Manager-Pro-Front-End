import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Venues from './Venues';
import Navigate from './Navigate';
import Events from './Events';
import Artists from './Artists';


function App({selectedVenue}) {
  const [events, setEvents] = useState([])
  const [isDelete, setDelete] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9292/events')
      .then(res => res.json())
      .then((events) => setEvents(events))
  }, [isDelete])

  function handleDelete (e) {
    setDelete(!isDelete)
    let id = e.target.id
    fetch(`http://localhost:9292/events/${id}`, {
      method: 'DELETE',
    })
  }

  function selectedVenue(e) {
    let filteredEvents = events.filter((event) => parseInt(e.target.id) === event.venue_id)
    setEvents(filteredEvents)
  }

  function selectedArtist(e) {
    let filteredArtists = events.filter((event) => parseInt(e.target.id) === event.artist_id)
    setEvents(filteredArtists)
  }

  return (
    <Router>
      <div className="App">
        <Navigate className="App-header"/>
        <header >
            <Switch>
              <Route exact path="/artists">
                <Artists 
                  selectedArtist={selectedArtist}
                />
              </Route>
              <Route exact path="/venues">
                <Venues 
                  selectedVenue={selectedVenue}
                  events= {events}
                />
              </Route>
              <Route exact path="/events">
                <Events 
                  events= {events}
                  handleDelete={handleDelete}
                  setEvents={setEvents}
                  // handleUpdateEvent={handleUpdateEvent}
                />
              </Route>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
