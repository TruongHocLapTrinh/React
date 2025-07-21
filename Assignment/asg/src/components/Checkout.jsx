import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import { clearCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);

  const handleCheckout = () => {
    dispatch(clearCart());
    toast.success('Thanh toán thành công!');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <Container className="my-4">
      <h2>Thanh Toán</h2>
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
                </div>
              </Card.Body>
            </Card>
          ))}
          <h4>Tổng cộng: {totalPrice} VNĐ</h4>
          <Button variant="success" onClick={handleCheckout}>
            Xác Nhận Thanh Toán
          </Button>
        </>
      )}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Container>
  );
};

export default Checkout;