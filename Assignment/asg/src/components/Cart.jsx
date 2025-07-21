import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Card, Form } from 'react-bootstrap';
import { updateCartItem, removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateCartItem({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);

  return (
    <Container className="my-4">
      <h2>Giỏ Hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3">
              <Card.Body className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.currentPrice} VNĐ x {item.quantity}</p>
                  <Form.Group style={{ width: '100px' }}>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleUpdateQuantity(item.id, Number(e.target.value))}
                      min="1"
                    />
                  </Form.Group>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                    className="mt-2"
                  >
                    Xóa
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
          <h4>Tổng cộng: {totalPrice} VNĐ</h4>
          <Button variant="primary" onClick={() => navigate('/checkout')}>
            Thanh Toán
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;