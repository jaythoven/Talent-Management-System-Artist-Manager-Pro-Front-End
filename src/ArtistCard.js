import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'


function ArtistCard({artist, selectedArtist}) {
  const {name, image, id} = artist
  const history = useHistory()

  function routeChange(e) {
    let path = '/events'
    history.push(path)
    selectedArtist(e)
  }

  return (
    <div>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button 
              id={id} 
              variant="primary"
              onClick={routeChange}
            >
                Show Events
            </Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCard