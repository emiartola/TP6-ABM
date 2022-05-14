import { useState } from "react";
import { Button, Col, Form, Nav, Navbar, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export const Navigation = () => {

  const navigate = useNavigate();
  const [termino, setTermino] = useState<string>("");

  const changeHandler = async (e: any) => {
    await setTermino(e.target.value);
  }

  const buscar = async () => {
    console.log("Buscar " + termino);
    navigate('/instrumentosbuscar/' + termino);
    window.location.reload();
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      buscar();
    }
  }
  return (

    <Navbar bg="secondary" variant="dark">
      <nav className="title">MUSICAL HENDRIX</nav>
      <Nav className="mr-auto">
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/DondeEstamos">¿Dónde estamos?</Nav.Link>
        <Nav.Link href="/"> Productos </Nav.Link>
        <Nav.Link href="/Grilla"> Grilla Instrumentos </Nav.Link>
      </Nav>
      <Form>
        < Row>
          <Col md={8}><Form.Control type="Text" placeholder="Buscar" defaultValue={termino} onChange={changeHandler} onKeyDown={handleKeyDown} /></Col>
          <Col md={4}><Button type="button" onClick={buscar} variant="outline-light">Search</Button></Col>
        </Row>
      </Form>
    </Navbar>

  )
}

