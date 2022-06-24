import React from 'react'

function EditArtistForm({formData}) {
  return (
    <div className="container">
      <form 
        className="edit-artist-form" 
        // onSubmit={handleEdit}
      >
          <input
            type="text"
            name="artist_name"
            value={formData.artist_name}
            // onChange={handleChange}
            placeholder="Artist Name"
            className="input-text"
          />
          <br></br>
          <input
            type="text"
            name="image"
            value={formData.image}
            // onChange={handleChange}
            placeholder="Image"
            className="input-text"
          />
          <br />
          <br />
          <input
            type="submit"
            name="submit"
            value="Form Submission"
            className="submit"
          />
      </form>
      <br></br>
    </div>
  )
}

export default EditArtistForm