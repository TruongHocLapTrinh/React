import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">My Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
