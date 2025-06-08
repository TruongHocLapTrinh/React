import React from "react";
import { Navbar, Nav, Container, Card } from "react-bootstrap";
import "./style.css";

const MyUniPage = () => {
  return (
    <>
      <Navbar bg="orange" expand="lg" className="p-4">
        <Container>
          <Navbar.Brand>
            <Card className="logo-container mb-3">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPjx9Fqt-4lb-AgyPB5o_J7CbVvGyZiqctQ&s"
              />
            </Card>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-menu">
              <Nav.Link href="#"  style={{ textDecoration: "none" }}>Home</Nav.Link>
              <Nav.Link href="#"  style={{ textDecoration: "none" }}>About</Nav.Link>
              <Nav.Link href="#"  style={{ textDecoration: "none" }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="content-section">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">About</Card.Subtitle>
            <Card.Text>This is the about section of the website.</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Contact</Card.Subtitle>
            <Card.Text>
              For any inquiries, please contact us at example@example.com.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <div className="footer">© 2023 Website. All rights reserved.</div>
    </>
  );
};

export default MyUniPage;
