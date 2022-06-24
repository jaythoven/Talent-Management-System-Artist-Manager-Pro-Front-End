import React, {useState} from 'react'
import EditArtistForm from './EditArtistForm'
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
  const [showForm, setShowForm] = useState(false)

  function routeChange(e) {
    let path = '/events'
    history.push(path)
    selectedArtist(e)
  }
  
  function handleShow() {
    setShowForm((showForm) => !showForm);
  }

  function handleChange(e) {
    setFormData((formData) => ({...formData, 
      [e.target.name]: e.target.value}));
      console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/artists/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        artist_name: formData.artist_name,
        image: formData.image,
      })
    })
    .then(r => r.json())
    .then(handleUpdateArtist)
    setFormData(initialEventForm)
    handleShow()
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
              onClick={routeChange}>Show Events
            </Button>
            <br></br>
          {showForm ? 
            <EditArtistForm 
              formData={formData}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            /> : null}
            <Button onClick={handleShow} variant="primary">
              {showForm ? "Hide Form" : "Edit Artist"}
            </Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCard