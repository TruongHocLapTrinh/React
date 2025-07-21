import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import { clearCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [hasCheckedOut, setHasCheckedOut] = useState(false);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity * 1000, 0);

  const handleCheckout = useCallback(() => {
    if (cartItems.length > 0 && !hasCheckedOut) {
      setHasCheckedOut(true);
      dispatch(clearCart());
      toast.success('Thanh toán thành công!', { toastId: 'checkout-success' });
      setTimeout(() => {
        navigate('/');
        setHasCheckedOut(false); // Reset for future checkouts
      }, 2000);
    }
  }, [dispatch, navigate, cartItems.length, hasCheckedOut]);

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
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                />
                <div>
                  <h5>{item.name}</h5>
                  <p>{(item.currentPrice * 1000).toLocaleString('vi-VN')} VNĐ x {item.quantity}</p>
                </div>
              </Card.Body>
            </Card>
          ))}
          <h4>Tổng cộng: {totalPrice.toLocaleString('vi-VN')} VNĐ</h4>
          <Button variant="success" onClick={handleCheckout} disabled={hasCheckedOut}>
            Xác Nhận Thanh Toán
          </Button>
        </>
      )}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Container>
  );
};

export default Checkout;