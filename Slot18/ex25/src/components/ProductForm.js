import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../store/productSlice';
import { Container, Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      catalogs: ['new'],
    };
    dispatch(addProductAsync(newProduct));
    setName('');
    setPrice('');
  };

  return (
    <Container className="mt-4">
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter product name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </Form.Group>
        <Button type="submit">Add Product</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
