import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import placeholder from './images/Tba.png'

function VenueCard({venue}) {
  const {name, location} = venue

  return (
    <div>
      <Card className="card bg-light mb-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={placeholder}/>
          <Card.Body>
            {name} | {location}
            <br></br>
            <Button variant="danger">Placeholder Button</Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default VenueCard