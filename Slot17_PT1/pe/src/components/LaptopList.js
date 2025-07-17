import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Form, Carousel, Nav, Navbar , NavDropdown   } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ExampleCarouselImage from './ExampleCarouselImage';
import Footer from "./Footer";

const imageList = [
  { src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpixrLHr5NRUKT63PC7s6upvT7qnrV_oZeneOWius-PH8hfat014n8B8soYqxMv3RwOiYCVTgyFKtTem36dFZj1xr0iEmlU-SXSnriPg', caption: 'Slide 1' },
  { src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpixrLHr5NRUKT63PC7s6upvT7qnrV_oZeneOWius-PH8hfat014n8B8soYqxMv3RwOiYCVTgyFKtTem36dFZj1xr0iEmlU-SXSnriPg', caption: 'Slide 2' },
  { src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpixrLHr5NRUKT63PC7s6upvT7qnrV_oZeneOWius-PH8hfat014n8B8soYqxMv3RwOiYCVTgyFKtTem36dFZj1xr0iEmlU-SXSnriPg', caption: 'Slide 3' }
];

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchLaptops = async () => {
    const res = await axios.get("http://localhost:5000/Laptops");
    setLaptops(res.data);
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  const handleSearch = () => {
    const filtered = laptops.filter(
      (laptop) =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setLaptops(filtered);
  };

  return (
    
    <Container className="mt-4">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <h2 className="text-center mb-4">Laptop List</h2>
      <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" images={imageList} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by brand or model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button className="mt-2" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      <Row>
        {laptops.map((laptop) => (
          <Col md={4} sm={6} xs={12} key={laptop.id} className="mb-4">
            <Card className="h-100 laptop-card">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={laptop.image}
                  alt={`${laptop.brand} ${laptop.model}`}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  {laptop.brand} {laptop.model}
                </Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {laptop.year} <br />
                  <strong>Price:</strong> {laptop.price} <br />
                </Card.Text>
                <div className="mt-auto">
                  <Link to={`/laptops/${laptop.id}`}>
                    <Button variant="primary" className="w-100">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Footer/>
      </Row>
    </Container>
  );
};

export default LaptopList;
