import React, {useState} from 'react'

function EditArtistForm({handleSubmit, handleChange, formData}) {
 
  return (
    <div className="container">
      <br></br>
      <form 
        className="edit-artist-form" 
        onSubmit={handleSubmit}
      >
          <input
            type="text"
            name="artist_name"
            value={formData.artist_name}
            onChange={handleChange}
            placeholder="Artist Name"
            className="input-text"
          />
          <br></br>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image"
            className="input-text"
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit Changes"
          />
      </form>
      <br></br>
    </div>
  )
}

export default EditArtistForm