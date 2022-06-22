import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ArtistCard({artist}) {
  const {name, image} = artist

  return (
    <div>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button variant="primary">Show Events</Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCard