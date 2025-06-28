import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/news">
            News
          </Nav.Link>
          <Nav.Link as={NavLink} to="/quiz">
            Quiz
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
