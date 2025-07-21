import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Drink Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{paddingTop: 15}}>
              <Nav.Link as={Link} to="/">Trang Chủ</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Giỏ Hàng <Badge bg="info">{totalItems}</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Carousel style={{ height: '500px', overflow: 'hidden' }}>
          <Carousel.Item>
            <div style={{ width: '100%', height: '800px', overflow: 'hidden' }}>
              <img
                className="d-block w-100 carousel-img"
                src="https://stc.shopiness.vn/deal/2019/11/19/f/1/2/d/1574134728866_540.png"
                alt="Banner 1"
                style={{ 
                  width: '100%', 
                  height: '800px', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            <Carousel.Caption>
              <h4 style={{ fontSize: '1.2rem' }}>Khuyến Mãi Đặc Biệt</h4>
              <p style={{ fontSize: '0.9rem' }}>Giảm giá 20% cho tất cả đồ uống!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ width: '100%', height: '800px', overflow: 'hidden' }}>
              <img
                className="d-block w-100 carousel-img"
                src="https://tocotocotea.com/wp-content/uploads/2024/10/Thumb-6.png"
                alt="Banner 2"
                style={{ 
                  width: '100%', 
                  height: '800px', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Header;