import React, {useState, Fragment} from 'react'
import Table from 'react-bootstrap/Table'
import EventForm from './EventForm'
import Button from 'react-bootstrap/Button'
import EditableRow from './components/EditableRow'
import ReadOnlyRow from './components/ReadOnlyRow'


function Events({isUpdate, setIsUpdate, events, handleDelete, setEvents}) {
  const [showForm, setShowForm] = useState(false)
  const [editEventId, setEditEventId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    // "name": "",
    "date": "",
    "time": "",
    "artist": "",
    "artist_id": "",
    // "venue": "",
    // "venue_id": ""
  })

  function handleShow() {
    setShowForm((showForm) => !showForm);
  }

  function handleEdit(e, event) {
    console.log(e.target.id)
    setEditEventId(parseInt(e.target.id))
    console.log(event)
    console.log(parseInt(e.target.id))
    const formValues = {
      // "event_name": event.event_name,
      "date": event.date,
      "time": event.time,
      "artist": event.artist,  
      "artist_id": event.artist_id,
      // "venue": event.venue.venue_name,
      // "venue_id": event.venue_id
    }
    console.log(formValues)
    setEditFormData(formValues)
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    console.log(editFormData.date, editFormData.time, editFormData.artist)
  
   fetch(`http://localhost:9292/events/${editEventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        // 
        // event_name: editFormData.event_name,
        time: editFormData.time,
        date: editFormData.date,
        artist: editFormData.artist,
        // artist_id: editFormData.artist_id,
        // venue: editFormData.venue,
        // venue_id: editFormData.venue_id
      })
    })
    .then((res) => res.json())
    .then(data => console.log(data))
    // .then(handleUpdateEvent)
    setIsUpdate(!isUpdate)
    setEditEventId(null)
  }
  
  // function handleUpdateEvent(editedEvent) {
  //   const updatedEvents = events.map((event) => event.id === editEventId ? editedEvent : event)
  //   console.log(updatedEvents)
  //   setEvents(updatedEvents)
  // }

  function handleChange(e) {
    e.preventDefault()
    const {name, value} = e.target
    setEditFormData({...editFormData,
      [name]: value})
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
          <Button onClick={handleShow} variant="primary" >{showForm ? "Cancel" : "Create New Event"}</Button>
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
                      event={event}
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