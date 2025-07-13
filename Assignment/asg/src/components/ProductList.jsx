import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, deleteProductAsync } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import ProductForm from './ProductForm';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state);
  const [showAddModal, setShowAddModal] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa đồ uống này?')) {
      dispatch(deleteProductAsync(id));
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter ? product.category === categoryFilter : true) &&
      (brandFilter ? product.brand === brandFilter : true)
    );
  });

  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];

  return (
    <Container className="my-4">
      <h2 className="mb-4">Danh Sách Đồ Uống</h2>
      <Button variant="primary" onClick={() => setShowAddModal(true)} className="mb-3">
        Thêm Đồ Uống
      </Button>

      <div className="filter-container">
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Lọc theo danh mục</Form.Label>
              <Form.Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="">Tất cả</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Lọc theo thương hiệu</Form.Label>
              <Form.Select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
                <option value="">Tất cả</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </div>

      <ProductForm show={showAddModal} handleClose={() => setShowAddModal(false)} />

      {loading && <Spinner animation="border" className="d-block mx-auto my-4" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && filteredProducts.length === 0 && (
        <Alert variant="info">Không có đồ uống nào phù hợp!</Alert>
      )}

      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} sm={6} key={product.id} className="mb-4">
            <Card className="product-card shadow-sm hover-zoom">
              <Card.Img variant="top" src={product.image} alt={product.name} className="card-img-top" onError={(e) => (e.target.src = 'https://via.placeholder.com/180?text=Hình+không+tải+được')} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description.substring(0, 50)}...</Card.Text>
                <Card.Text>
                  <span style={{ color: '#e67e22', fontWeight: 'bold' }}>{product.currentPrice} VNĐ</span>
                  <span style={{ textDecoration: 'line-through', color: '#999', marginLeft: '10px' }}>{product.price} VNĐ</span>
                </Card.Text>
                <div className="mt-2">
                  <Link to={`/product/${product.id}`} className="btn btn-outline-info btn-sm me-2">
                    Xem Chi Tiết
                  </Link>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
                    Xóa
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Container>
  );
};

export default ProductList;