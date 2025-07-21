import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Card, Form } from 'react-bootstrap';
import { updateCartItem, removeFromCart } from '../redux/actions/cartActions';
import { updateProductAsync } from '../redux/actions/productActions';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const cartItem = cartItems.find((item) => item.id === id);
    const product = products.find((p) => p.id === id);
    
    if (!product) {
      toast.error('Sản phẩm không tồn tại!');
      return;
    }

    const quantityDifference = newQuantity - cartItem.quantity;
    if (quantityDifference > 0 && product.quantity < quantityDifference) {
      toast.error('Số lượng vượt quá tồn kho!');
      return;
    }

    dispatch(updateCartItem({ id, quantity: newQuantity }));
    
    // Update product inventory
    if (quantityDifference !== 0) {
      dispatch(updateProductAsync({ ...product, quantity: product.quantity - quantityDifference }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    // Optionally, you could restore the product quantity to inventory here
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity * 1000, 0);

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
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} />
                <div>
                  <h5>{item.name}</h5>
                  <p>{(item.currentPrice * 1000).toLocaleString('vi-VN')} VNĐ x {item.quantity}</p>
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
          <h4>Tổng cộng: {totalPrice.toLocaleString('vi-VN')} VNĐ</h4>
          <Button variant="primary" onClick={() => navigate('/checkout')}>
            Thanh Toán
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;