import {  Nav, Navbar } from "react-bootstrap"

export const Navigation = () => {

  return (
    
      <Navbar bg="secondary" variant="dark">
        <nav className="title">MUSICAL HENDRIX</nav>
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/DondeEstamos">¿Dónde estamos?</Nav.Link>
          <Nav.Link href="/"> Productos </Nav.Link>
        </Nav>
      </Navbar>
    
  )
}

