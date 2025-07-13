import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export const fetchProductsRequest = () => ({ type: 'FETCH_PRODUCTS_REQUEST' });
export const fetchProductsSuccess = (products) => ({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });
export const fetchProductsFailure = (error) => ({ type: 'FETCH_PRODUCTS_FAILURE', payload: error });
export const addProduct = (product) => ({ type: 'ADD_PRODUCT', payload: product });
export const updateProduct = (product) => ({ type: 'UPDATE_PRODUCT', payload: product });
export const deleteProduct = (id) => ({ type: 'DELETE_PRODUCT', payload: id });

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get('http://localhost:3001/products')
      .then((response) => dispatch(fetchProductsSuccess(response.data)))
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
        toast.error('Lỗi khi lấy danh sách đồ uống!');
      });
  };
};

export const addProductAsync = (product) => {
  return (dispatch) => {
    const newProduct = { ...product, id: uuidv4() };
    axios
      .post('http://localhost:3001/products', newProduct)
      .then((response) => {
        dispatch(addProduct(response.data));
        toast.success('Thêm đồ uống thành công!');
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
        toast.error('Lỗi khi thêm đồ uống!');
      });
  };
};

export const updateProductAsync = (product) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/products/${product.id}`, product)
      .then((response) => {
        dispatch(updateProduct(response.data));
        toast.success('Cập nhật đồ uống thành công!');
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
        toast.error('Lỗi khi cập nhật đồ uống!');
      });
  };
};

export const deleteProductAsync = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/products/${id}`)
      .then(() => {
        dispatch(deleteProduct(id));
        toast.success('Xóa đồ uống thành công!');
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
        toast.error('Lỗi khi xóa đồ uống!');
      });
  };
};