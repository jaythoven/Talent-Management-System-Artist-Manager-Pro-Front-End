import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'

function VenueCard({venue, selectedEvents}) {
  const {name, location, image, id, shows} = venue
  const history = useHistory()

  // function showEvents(e) {
  //   let id = e.target.id
  //   setEvents(selectedEvents)
  // }
  console.log(venue.shows)
  function routeChange(e) {
    let path = '/events'
    history.push(path)
    let filteredEvents = shows.filter((show) => e.target.id === show.venue_id)
    console.log(filteredEvents)
    selectedEvents(filteredEvents)
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
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