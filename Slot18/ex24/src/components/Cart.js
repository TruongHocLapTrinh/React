import React from 'react';
import { useSelector } from 'react-redux';
import { Card, ListGroup, Badge } from 'react-bootstrap';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Shopping Cart</Card.Title>
        {items.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ListGroup>
            {items.map(item => (
              <ListGroup.Item key={item.id}>
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{item.name}</strong> (${item.price}) 
                  </div>
                  <div>
                    Quantity: <Badge bg="info">{item.quantity}</Badge>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <h5 className="mt-3">Total: ${total.toFixed(2)}</h5>
      </Card.Body>
    </Card>
  );
};

export default Cart;
