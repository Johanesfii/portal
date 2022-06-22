import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/header.css";
export default function App() {
  return (

      <Navbar className='bg' variant="dark">
    <Container>
    <Navbar.Brand href="#home">NewsInfo</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
           

    

  )
}
