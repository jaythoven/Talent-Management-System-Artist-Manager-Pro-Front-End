import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function VenueCard({venue}) {
  const {name, location, image} = venue

  return (
    <div>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{location}</Card.Text>
            <Button variant="primary">Show Events</Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default VenueCard