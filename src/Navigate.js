import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from './images/tix.png'

function Navigate() {

  return (
    <div className='navbar'>
      <Container>
        <Nav className="navbar">
        <img src={logo} alt="Tickets" style={{width:50, marginTop: -2}}/>
          <Nav.Link className="nav_link" href="/artists">Artists</Nav.Link>
          <Nav.Link className="nav_link" href="/venues">Venues</Nav.Link>
          <Nav.Link className="nav_link" href="/events">Events</Nav.Link>
        </Nav>
      </Container>
    </div>
  )
}

export default Navigate