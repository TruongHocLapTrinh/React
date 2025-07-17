import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container className="mt-4">
      <h2>Product List</h2>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>ID: {product.id}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <div className="mb-2">
                  {product.catalogs.map((c, idx) => (
                    <Badge bg="secondary" key={idx} className="me-1">{c}</Badge>
                  ))}
                </div>
                <Button variant="primary" className="w-100" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
