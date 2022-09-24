import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,Container} from 'react-bootstrap'


const Header = () => {
  return (
    <Navbar bg='dark'  variant="dark" expand='lg' collapseOnSelect >
    <Container >
      <LinkContainer to='/'>
      <Navbar.Brand>My Shop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <LinkContainer to='/cart'>
          <Nav.Link><i className="fas fa-cart-arrow-down fa-2x fa-solid"></i></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/Signin'>
          <Nav.Link>Signin<i className="fas-fa-user"></i></Nav.Link>
          </LinkContainer>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header