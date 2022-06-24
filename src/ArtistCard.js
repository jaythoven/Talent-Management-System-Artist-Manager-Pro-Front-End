import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'

const initialEventForm = {
  artist_name: "",
  image: "",
}

function ArtistCard({artist, selectedArtist, handleUpdateArtist}) {
  const {artist_name, image, id} = artist;
  const history = useHistory();
  const [formData, setFormData] = useState(initialEventForm);
  // const [showForm, setShowForm] = useState(false)

  function routeChange(e) {
    let path = '/events'
    history.push(path)
    selectedArtist(e)
  }
  
  // function handleShow() {
  //   setShowForm((showForm) => !showForm);
  // }

  function handleChange(e) {
    setFormData((formData) => ({...formData, [e.target.name]: e.target.value}));
  }

  function handleEdit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/artists/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        artist_name: artist_name,
        image: image,
      })
    })
    .then(r => r.json())
    .then(handleUpdateArtist)

    setFormData(initialEventForm)
  }

  return (
    <div>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title>{artist_name}</Card.Title>
            <Button 
              id={id} 
              variant="primary"
              onClick={routeChange}
            >
                Show Events
            </Button>
            <br></br>
            <Button 
              // id={id} 
              variant="primary"
              // onClick={handleShow}
            >
                <div className="container">
      <form className="edit-artist-form" onSubmit={handleEdit}>
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
            </Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCard