import React, {useState} from 'react'

function EditableRow({handleChange, event, handleEditSubmit, editFormData}) {
  // const [formData, setFormData] = useState({
  //   "name": "",
  //   "date": "",
  //   "time": "",
  //   "venue": "",
  //   "artist": "",
  // })

  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          name='name'
          value={editFormData.name}
          onChange={handleChange}
          placeholder='Event Name'
          className='input-text'
        ></input>
      </td>
      <td>
        <input type="text"
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
        <input
          type="text"
          name="artist"
          value={editFormData.artist}
          onChange={handleChange}
          placeholder="Artist"
          className="input-text"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="venue"
          value={editFormData.venue}
          onChange={handleChange}
          placeholder="Venue"
          className="input-text"
        ></input>
      </td>
      <td>
        <button type ="submit">Save</button>
        <button type ="button">Cancel</button>
      </td>
    </tr>
  )
}

export default EditableRow