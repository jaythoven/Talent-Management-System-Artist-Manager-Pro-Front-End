import React from 'react'

function EditableRow({event,handleChange, editFormData, handleCancel}) {

  return (
    <tr>
      <td>
        {/* <input
          type='text'
          required='required'
          name='event_name' */}
          {/* value= */}
          {event.event_name}
          {/* onChange={handleChange}
          placeholder='Event Name'
          className='input-text'
        ></input> */}
      </td>
      <td>
        <input 
        type="text"
        name="date"
        value={editFormData.date}
        onChange={handleChange}
        placeholder="Date: YYYY/MM/DD"
        className="input-text"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="time"
          value={editFormData.time}
          onChange={handleChange}
          placeholder="Time: HH:MM AM/PM"
          className="input-text"
        ></input>
      </td>
      <td>
        {/* <label
          type="text"
          name="artist"
          value= */}
          {event.artist.artist_name}
          {/* onChange={handleChange}
          placeholder="Artist"
          className="input-text"
        ></label> */}
      </td>
      <td>
        {/* <input
          type="text"
          name="artist_id"
          value={editFormData.artist_id}
          onChange={handleChange}
          placeholder="Artist ID"
          className="input-text"
        ></input> */}
      </td>
      <td>
        {/* <input
          type="text"
          name="venue"
          value= */}
          {event.venue.venue_name}
        {/* //   onChange={handleChange}
        //   placeholder="Venue"
        //   className="input-text"
        // ></input> */}
      </td>
      <td>
        {/* <input
          type="text"
          name="venue_id"
          value={editFormData.venue_id}
          onChange={handleChange}
          placeholder="Venue ID"
          className="input-text"
        ></input> */}
      </td>
      <td>
        <button type ="submit">Save</button>
        <button type ="button" onClick={handleCancel}>Cancel</button>
      </td>
    </tr>
  )
}

export default EditableRow