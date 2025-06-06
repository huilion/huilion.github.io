import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Components.css"

const NavBar = () => {

    return (
        <Navbar expand="lg" className="stick">
          <Navbar.Brand href="#">
          <i className="fa-solid fa-house nav-icon"></i>
            HUILIN
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about-container">about</Nav.Link>
              <Nav.Link href="#projects">projects</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default NavBar;