import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './images/tix.png'

function Navigate() {

  return (
    <div className='navbar'>
      <Container>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar className="navbar">
          {/* <Container> */}
            <Navbar.Brand href="/" className='navbar logo'>
            </Navbar.Brand>
              <Nav className="navbar">
              <img src={logo} alt="Tickets" style={{width:50, marginTop: -7}}/>
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
              </Nav>
          {/* </Container> */}
            </Navbar>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default Navigate