import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

function EventItem({event}) {
  const {name, date} = event

  return (
    <div variant="primary" className="d-flex justify-content-between align-items-start">
      <ListGroup variant="primary" as="ol" className="d-flex justify-content-between align-items-start">
        <ListGroup.Item variant="primary" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto" variant="primary">
            <div className="fw-bold" variant="primary">{name}</div>
              {date}
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default EventItem