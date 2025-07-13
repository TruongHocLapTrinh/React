import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { addProductAsync, updateProductAsync } from '../redux/actions/productActions';
import PropTypes from 'prop-types';

const ProductForm = ({ show, handleClose, product, isEdit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    product || {
      name: '',
      description: '',
      price: '',
      currentPrice: '',
      image: '',
      category: '',
      brand: '',
    }
  );
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price || !formData.currentPrice) {
      setError('Vui lòng điền đầy đủ các trường bắt buộc!');
      return;
    }
    if (isEdit) {
      dispatch(updateProductAsync(formData));
    } else {
      dispatch(addProductAsync(formData));
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? 'Chỉnh Sửa Đồ Uống' : 'Thêm Đồ Uống'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tên đồ uống</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Giá gốc (VNĐ)</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Giá hiện tại (VNĐ)</Form.Label>
            <Form.Control
              type="text"
              name="currentPrice"
              value={formData.currentPrice}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hình ảnh (URL)</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Danh mục</Form.Label>
            <Form.Select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Chọn danh mục</option>
              <option value="Coffee">Coffee</option>
              <option value="Tea">Tea</option>
              <option value="Juice">Juice</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Thương hiệu</Form.Label>
            <Form.Select name="brand" value={formData.brand} onChange={handleChange}>
              <option value="">Chọn thương hiệu</option>
              <option value="Starbucks">Starbucks</option>
              <option value="Highlands">Highlands</option>
              <option value="Phuc Long">Phuc Long</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            {isEdit ? 'Cập Nhật' : 'Thêm'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currentPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    category: PropTypes.string,
    brand: PropTypes.string,
  }),
  isEdit: PropTypes.bool,
};