import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Container, ListGroup, Badge } from 'react-bootstrap';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h2>Shopping Cart</h2>
      <Card>
        <Card.Body>
          {items.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ListGroup>
              {items.map(item => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                  <div>
                    {item.name} (${item.price})
                  </div>
                  <div>
                    Qty: <Badge bg="info">{item.quantity}</Badge>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <h5 className="mt-3">Total: ${total.toFixed(2)}</h5>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cart;
