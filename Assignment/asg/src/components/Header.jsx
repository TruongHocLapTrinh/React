import React from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-bootstrap";
import { logout } from "../redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={isAuthenticated ? "/" : "/login"}>
            Truong Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ paddingTop: 15 }}>
              <Nav.Link as={Link} to="/">
                Trang Chủ
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Giỏ Hàng <Badge bg="info">{totalItems}</Badge>
              </Nav.Link>
              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>Đăng Xuất</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Đăng Nhập
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Carousel style={{ height: "600px", overflow: "hidden" }}>
          <Carousel.Item>
            <div style={{ width: "100%", height: "600px", overflow: "hidden" }}>
              <img
                className="d-block w-100 carousel-img"
                src="https://viettelmoney.vn/wp-content/uploads/2023/04/mua-1-tang-1-2-1024x478.jpg"
                alt="Banner 1"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <Carousel.Caption>
              <h4 style={{ fontSize: "1.2rem" }}>Khuyến Mãi Đặc Biệt</h4>
              <p style={{ fontSize: "0.9rem" }}>
                Giảm giá 20% cho tất cả đồ uống!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ width: "100%", height: "600px", overflow: "hidden" }}>
              <img
                className="d-block w-100 carousel-img"
                src="https://tocotocotea.com/wp-content/uploads/2024/10/Thumb-6.png"
                alt="Banner 2"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <Carousel.Caption>
              <h4 style={{ fontSize: "1.2rem" }}>Thử Đồ Uống Mới</h4>
              <p style={{ fontSize: "0.9rem" }}>Trà sữa mới thơm ngon!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Header;
