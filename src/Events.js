import React, {useState, Fragment} from 'react'
import Table from 'react-bootstrap/Table'
import EventForm from './EventForm'
import Button from 'react-bootstrap/Button'
import EditableRow from './components/EditableRow'
import ReadOnlyRow from './components/ReadOnlyRow'

function Events({events, handleDelete, setEvents}) {
  const [showForm, setShowForm] = useState(false)
  const [editEventId, setEditEventId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    "name": "",
    "date": "",
    "time": "",
    "venue": "",
    "artist": "",    
  })

  function handleShow() {
    setShowForm((showForm) => !showForm);
  }

  function handleEdit(e, event) {
    setEditEventId(parseInt(e.target.id))
    console.log(parseInt(e.target.id))
    const formValues = {
      "name": event.name,
      "date": event.date,
      "time": event.time,
      "venue": event.venue.name,
      "artist": event.artist.name  
    }
    setEditFormData(formValues)
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    console.log(e.target)
    const editedEvent = {
      name: editFormData.name,
      date: editFormData.date,
      time: editFormData.time,
      venue: editFormData.venue,
      artist: editFormData.artist
    }
    const updatedEvent = [...events]
    console.log(typeof editedEvent)
    console.log(updatedEvent)
    fetch(`http://localhost:9292/shows/${editEventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(editedEvent)
    })
      .then((res) => res.json())
      .then((events) => setEvents(events))
  }

  function handleChange(e) {
    e.preventDefault()
    const {name, value} = e.target
    setEditFormData({...editFormData,
      [name]: value})
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
        <EventForm 
          events={events} 
          setEvents={setEvents}
        /> : null
      }
        <div className="buttonContainer">
          <Button onClick={handleShow} variant="primary" >Create New Event</Button>
        </div>
      <br></br>
      <form  onSubmit={handleEditSubmit}>
        <Table responsive="sm">
          <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Artist</th>
            <th>Venue</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
            <tbody>
            {events.map((event) => (
                  //this section is new********************************
                <Fragment>
                  {editEventId === event.id ? (
                    <EditableRow 
                      event={event}
                      handleChange={handleChange}
                      editFormData={editFormData}
                      handleEditSubmit={handleEditSubmit}
                    />
                  ) : (
                    <ReadOnlyRow 
                      event={event} 
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  )}
                </Fragment>
              )
              //below is original******************************** 
                // <tr key={event.id}>
                //   <td id={event.id} onClick={handleDelete}>🗑️</td>
                //   <td>🖊️</td>
                //   <td>{event.name}</td>
                //   <td>{event.date}</td>
                //   <td>{event.time}</td>
                //   <td>{event.artist.name}</td>
                //   <td>{event.venue.name}</td>
                // </tr>
                )}
          </tbody>
        </Table>
      </form>
    </div>
  )
}

export default Events