import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'

function EventItem({event}) {
  const {name, date} = event

  return (

    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Festival Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Artist</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{date}</td>
          </tr>
          <tr>
            <td>2</td>
           
            <td>in T2</td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>in T3</td>
           
          </tr>
        </tbody>
      </Table>
     
    </div>
    // <div variant="primary" className="d-flex justify-content-between align-items-start">
    //   <ListGroup variant="primary" as="ol" className="d-flex justify-content-between align-items-start">
    //     <ListGroup.Item variant="primary" className="d-flex justify-content-between align-items-start">
    //       <div className="ms-2 me-auto" variant="primary">
    //         <div className="fw-bold" variant="primary">{name}</div>
    //           {date}
    //       </div>
    //       <Badge bg="primary" pill>
    //         14
    //       </Badge>
    //     </ListGroup.Item>
    //   </ListGroup>
    // </div>
  )
}

export default EventItem