import React from 'react'

function ReadOnlyRow({event, handleDelete, handleEdit}) {

  return (
    <tr key={event.id}>
      <td>{event.name}</td>
      <td>{event.date}</td>
      <td>{event.time}</td>
      <td>{event.artist.name}</td>
      <td>{event.artist_id}</td>
      <td>{event.venue.name}</td>
      <td>{event.venue_id}</td>
      <td
          id={event.id} 
          onClick={(e) => handleEdit(e, event)}
        >🖊️
      </td>
      <td id={event.id} onClick={handleDelete}>🗑️</td>
    </tr>
  )
}

export default ReadOnlyRow