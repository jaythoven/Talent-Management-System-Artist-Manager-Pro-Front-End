import React, {useState, useEffect} from 'react'
import Search from './Search'
import Table from 'react-bootstrap/Table'
import EventItem from './EventItem'

function Events({handleSearch}) {
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/shows')
      .then(res => res.json())
      .then(events => setEvents(events))
  }, [])

  function handleSearch (e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <br></br>
      <br></br>
      {/* <Search handleSearch={handleSearch} /> */}
      {events.map((event) => <EventItem key={event.id} event={event}/>)}
    </div>
  )
}

export default Events