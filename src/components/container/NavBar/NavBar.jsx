import { CartWidgets } from "../CartWidgets/CartWidget";
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap"

const NavBar = () => {
  return (
    <>
      <Navbar bg="ligth" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NetBooties</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Botines</Nav.Link>
              <Nav.Link href="#link">Conocenos</Nav.Link>
              <Nav.Link href="#link">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidgets />
        </Container>
      </Navbar>

    </>
  );
};

export default NavBar;
