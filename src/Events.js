import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import EventForm from './EventForm'
import Button from 'react-bootstrap/Button'

function Events({events, handleDelete, setEvents}) {
  const [showForm, setShowForm] = useState(false)
 

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
      {showForm ? 
        <EventForm events={events} 
        setEvents={setEvents}
        /> : null
      }
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
          <tbody>
            {events.map((event) => 
              <tr key={event.id}>
                <td id={event.id} onClick={handleDelete}>🗑️</td>
                <td>🖊️</td>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.artist.name}</td>
                <td>{event.venue.name}</td>
              </tr>
            )}
          </tbody>
        </Table>
    </div>
  )
}

export default Events