import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProducts, updateProductAsync } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { Container, Row, Col, Card, Button, Spinner, Alert, Badge, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import ProductForm from '../components/ProductForm';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const product = products.find((p) => p.id === id);
  const [showEditModal, setShowEditModal] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(1);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleAddToCart = () => {
    if (cartQuantity > product.quantity) {
      toast.error('Số lượng vượt quá tồn kho!');
      return;
    }
    dispatch(addToCart({ ...product, quantity: cartQuantity }));
    dispatch(updateProductAsync({ ...product, quantity: product.quantity - cartQuantity }));
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto my-4" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!product) return <Alert variant="warning">Không tìm thấy đồ uống!</Alert>;

  return (
    <Container className="my-4">
      <Button variant="secondary" onClick={() => navigate('/')} className="mb-3">
        Quay lại
      </Button>
      <Row>
        <Col md={6}>
          <Card className="product-card shadow-sm hover-zoom">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              className="rounded"
              style={{ objectFit: 'cover', height: '400px' }}
            />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="product-card shadow-sm hover-zoom">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>Giá gốc:</strong>{' '}
                <span style={{ textDecoration: 'line-through', color: '#999' }}>
                  {product.price} VNĐ
                </span>
                <br />
                <strong>Giá hiện tại:</strong>{' '}
                <span style={{ color: '#e67e22', fontWeight: 'bold' }}>
                  {product.currentPrice} VNĐ
                </span>
              </Card.Text>
              <Card.Text>Số lượng tồn kho: {product.quantity}</Card.Text>
              <Card.Text>
                <Badge style={{ margin: 10 }} bg="success">{product.category}</Badge>
                <Badge bg="info">{product.brand}</Badge>
              </Card.Text>
              <Form.Group className="mb-3">
                <Form.Label>Số lượng</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max={product.quantity}
                  value={cartQuantity}
                  onChange={(e) => setCartQuantity(Number(e.target.value))}
                  style={{ width: '100px' }}
                />
              </Form.Group>
              <Button variant="success" onClick={handleAddToCart} className="me-2" style={{ marginBottom: '10px' }}>
                Thêm vào giỏ hàng
              </Button>
              <Button variant="primary" onClick={() => setShowEditModal(true)}>
                Chỉnh Sửa
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ProductForm
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        product={product}
        isEdit
      />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Container>
  );
};

export default ProductDetail;