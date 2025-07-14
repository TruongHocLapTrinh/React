import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <h2 className="text-center mb-4">Laptop List</h2>
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
      </Row>
    </Container>
  );
};

export default LaptopList;
