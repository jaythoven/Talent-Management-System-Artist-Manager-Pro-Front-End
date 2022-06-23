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
    "artist": "",
    "artist_id": "",
    "venue": "",
    "venue_id": ""
  })

  function handleShow() {
    setShowForm((showForm) => !showForm);
  }

  function handleEdit(e, event) {
    setEditEventId(parseInt(e.target.id))
    console.log(event)
    console.log(parseInt(e.target.id))
    const formValues = {
      "name": event.name,
      "date": event.date,
      "time": event.time,
      "artist": event.artist.name,  
      "artist_id": event.artist_id,
      "venue": event.venue.name,
      "venue_id": event.venue_id
    }
    console.log(formValues)
    setEditFormData(formValues)
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    const editedEvent = {
      name: editFormData.name,
      date: editFormData.date,
      time: editFormData.time,
      artist: editFormData.artist,
      artist_id: editFormData.artist_id,
      venue: editFormData.venue,
      venue_id: editFormData.venue_id
    }
    // const updatedEvent = [...events]
    // console.log(updatedEvent)

    fetch(`http://localhost:9292/shows/${editEventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(editedEvent)
    })
    .then((res) => res.json())
    .then(handleUpdateEvent)

    setEditEventId(null)
  }
  
  function handleUpdateEvent(editedEvent) {
    const updatedEvents = events.map((event) => event.id === editEventId ? editedEvent : event)
    setEvents(updatedEvents)
    // setEvents(updatedEvents)
  }

  function handleChange(e) {
    e.preventDefault()
    const {name, value} = e.target
    setEditFormData({...editFormData,
      [name]: value})
      console.log(name,value)
      console.log(editFormData)
  }

  function handleCancel() {
    setEditEventId(null)
  }

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
      <form onSubmit={(e) => handleEditSubmit(e)}>
        <Table responsive="sm">
          <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Artist</th>
            <th>Artist ID</th>
            <th>Venue</th>
            <th>Venue ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
            <tbody>
            {events.map((event) => (
                <Fragment>
                  {editEventId === event.id ? (
                    <EditableRow 
                      handleChange={handleChange}
                      editFormData={editFormData}
                      handleCancel={handleCancel}
                    />
                  ) : (
                    <ReadOnlyRow 
                      event={event} 
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  )}
                </Fragment>
            ))}
          </tbody>
        </Table>
      </form>
    </div>
  )
}

export default Events