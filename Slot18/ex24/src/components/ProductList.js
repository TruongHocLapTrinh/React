import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../store/cartSlice';
import { product } from '../data/product';
import { Card, Button, Badge } from 'react-bootstrap';

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleUpdate = () => {
    dispatch(updateCart({ id: product.id, quantity: 5 })); // Ví dụ: đặt lại số lượng = 5
  };

  const handleDelete = () => {
    dispatch(deleteFromCart(product.id));
  };

  return (
    <Card style={{ width: '28rem' }} className="mb-3">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ID: {product.id}</Card.Subtitle>
        <Card.Text>
          <strong>Price:</strong> ${product.price} <br />
          <strong>Catalogs:</strong>{' '}
          {product.catalogs.map((c, idx) => (
            <Badge key={idx} bg="secondary" className="me-1">{c}</Badge>
          ))}
        </Card.Text>
        <Button variant="primary" className="me-2" onClick={handleAdd}>
          Add to Cart
        </Button>
        <Button variant="warning" className="me-2" onClick={handleUpdate}>
          Update to Cart(5)
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete from Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
