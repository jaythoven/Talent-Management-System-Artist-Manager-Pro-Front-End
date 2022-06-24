import React, {useState} from 'react'

const initialEventForm = {
  artist_name: "",
  image: "",
}

function ArtistForm({ setArtists }) {
  const [formData, setFormData] = useState(initialEventForm);

  function handleChange(e) {
    setFormData((formData) => ({...formData, [e.target.name]: e.target.value}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/artists", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then(r => r.json())
    // .then(newEventData => setEvents(newEventData));
    .then(newArtistData => setArtists((currentArtists) => [...currentArtists, newArtistData]));
    // resets form after submisison
    setFormData(initialEventForm);
  }


  return (
    <div className="container">
      <form className="add-artist-form" onSubmit={handleSubmit}>
        <h4>Add New Artist</h4>
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
          name="submit"
          value="Form Submission"
          className="submit"
        />
        <br></br>
      </form>
      <br></br>
    </div>
  )
}

export default ArtistForm;