import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/actions/productActions";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
  Badge,
} from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ProductForm from "./ProductForm";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state);
  const product = products.find((p) => p.id === id);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto my-4" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!product) return <Alert variant="warning">Không tìm thấy đồ uống!</Alert>;

  return (
    <Container className="my-4">
      <Button
        variant="secondary"
        onClick={() => navigate("/")}
        className="mb-3"
      >
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
              style={{ objectFit: "cover", height: "400px" }}
            />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="product-card shadow-sm hover-zoom">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>Giá gốc:</strong>{" "}
                <span style={{ textDecoration: "line-through", color: "#999" }}>
                  {product.price} VNĐ
                </span>
                <br />
                <strong>Giá hiện tại:</strong>{" "}
                <span style={{ color: "#e67e22", fontWeight: "bold" }}>
                  {product.currentPrice} VNĐ
                </span>
              </Card.Text>
              <Card.Text>
                <Badge style={{margin: 10}} bg="success">{product.category}</Badge>
                <Badge bg="info">{product.brand}</Badge>
              </Card.Text>
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
