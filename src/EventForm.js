import React, {useState} from 'react'

function EventForm() {
  const [formData, setFormData] = useState({
    "name": "",
    "date": "",
    "time": "",
    "venue": "",
    "artist": "",
  })


  return (
    <div className="container">
      <form className="add-toy-form">
        <h4>Add New Event</h4>
        <input
          type="text"
          name="name"
          value={formData.name}
          // onChange={handleChange}
          placeholder="Event Name"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="date"
          value={formData.date}
          // onChange={handleChange}
          placeholder="Date: YYYY/MM/DD"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="time"
          value={formData.time}
          // onChange={handleChange}
          placeholder="Time"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="venue"
          value={formData.venue}
          // onChange={handleChange}
          placeholder="Venue"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="artist"
          value={formData.artist}
          // onChange={handleChange}
          placeholder="Artist"
          className="input-text"
        />
        <br></br>
        <br />
        <input
          type="submit"
          name="submit"
          value="Add Event"
          className="submit"
        />
      </form>
    </div>
  )
}

export default EventForm