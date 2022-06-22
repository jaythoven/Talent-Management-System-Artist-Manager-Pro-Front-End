import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import EventForm from './EventForm'
import Button from 'react-bootstrap/Button'

function Events() {
  const [events, setEvents] = useState([])
  const [artists, setArtists] = useState([])
  const [venues, setVenues] = useState([])
  const [search, setSearch] = useState("")
  const [isDelete, setDelete] = useState(false)
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    fetch('http://localhost:9292/shows')
      .then(res => res.json())
      .then((events) => setEvents(events))
  }, [isDelete])

  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then(res => res.json())
      .then((artists) => setArtists(artists))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/venues')
      .then(res => res.json())
      .then((venues) => setVenues(venues))
  }, [])


  // function handleSearch (e) {
  //   setSearch(e.target.value)
  // }
  
  function handleDelete (e) {
    setDelete(!isDelete)
    let id = e.target.id
    fetch(`http://localhost:9292/shows/${id}`, {
      method: 'DELETE',
    })
  }

  function handleShow() {
    setShowForm((showForm) => !showForm);
  }

  // function handleSubmit(e) {
  //   e.preventDefault()

  //   fetch('http://localhost:3001/toys', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accepts': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //     })
  //     .then(res=>res.json())
  //     .then(newToy => setToys([...toys, newToy]))
  //     setFormData({
  //       "name": "",
  //       "image": "",
  //     })
  //   }
  return (
    <div>
      <br></br>
      {showForm ? <EventForm events={events} setEvents={setEvents}/> : null}
        <div className="buttonContainer">
          <Button onClick={handleShow} variant="primary" >Create New Event</Button>
        </div>
      <br></br>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Delete</th>
            <th>Edit</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Artist</th>
            <th>Venue</th>
          </tr>
        </thead>
          {events.map((event) => 
          <tbody>
            <tr>
              <td id={event.id} onClick={handleDelete}>🗑️</td>
              <td>🖊️</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.artist_id}</td>
              <td>{event.venue_id}</td>
            </tr>
          </tbody>
          )}
        </Table>
    </div>
  )
}

export default Events