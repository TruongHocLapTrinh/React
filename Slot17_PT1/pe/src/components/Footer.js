// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white mt-5 py-4" style={{ backgroundColor: '0d6efd' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide the best products and services for our customers.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 789</p>
          </Col>
        </Row>
        <hr className="border-top border-secondary" />
        <Row>
          <Col className="text-center">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
