import React from 'react'
import { Nav,Navbar,Container, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed top-0 w-100  z-1">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',fontWeight:'bold'}}><i class="fa-solid fa-truck-fast"></i> E Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded'><Link to={'/Wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',fontWeight:'bold'}} ><i class="fa-solid text-danger  fa-heart me-2"></i>Wishlist <Badge className='ms-2 rounded  me-2'>10</Badge> </Link></Nav.Link>
          <Nav.Link className='btn border rounded ms-3'><Link to={'/Cart'} className='d-flex align-items-center' style={{textDecoration:'none',fontWeight:'bold'}} ><i class="fa-solid text-warning fa-cart-shopping me-2"></i>Cart <Badge className='ms-2 rounded  me-2' >10</Badge></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header