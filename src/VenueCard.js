import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'

function VenueCard({venue, events, selectedVenue}) {
  const {venue_name, location, image, id} = venue
  const history = useHistory()

  function routeChange(e) {
    let path = '/events'
    history.push(path)
    selectedVenue(e)
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title>{venue_name}</Card.Title>
            <Card.Text>{location}</Card.Text>
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

export default VenueCard