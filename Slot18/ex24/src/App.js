import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-4">
      <h1>My Shop</h1>
      <ProductList />
      <Cart />
    </Container>
  );
}

export default App;
