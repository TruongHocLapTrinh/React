import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center', marginBottom: '20' }}>
        <p>&copy; 2025 Drink Shop. All rights reserved.</p>
        <p>Liên hệ: support@drinkshop.com | Hotline: 0123-456-789</p>
      </Container>
    </footer>
  );
};

export default Footer;