import React, { useState, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  name: "",
  age: "",
  email: "",
  phone: "",
  gender: "",
  agreeTerms: false,
  isSubmitted: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

const MyForm2 = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: "SET_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value,
    });
  };

  const handleValidation = () => {
    const newErrors = {};

    if (!state.name) {
      newErrors.name = "Tên không được để trống!";
    } else if (state.name.length < 3 || state.name.length > 50) {
      newErrors.name = "Tên phải chứa từ 3 đến 50 ký tự!";
    }

    if (!state.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(state.age) || state.age < 18 || state.age > 100) {
      newErrors.age = "Tuổi phải từ 18 đến 100!";
    }

    if (!state.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = "Email không đúng định dạng!";
    }

    if (!state.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!/^\d{10,15}$/.test(state.phone)) {
      newErrors.phone = "Số điện thoại phải chứa từ 10 đến 15 chữ số!";
    }

    if (!state.gender) {
      newErrors.gender = "Vui lòng chọn giới tính!";
    }

    if (!state.agreeTerms) {
      newErrors.agreeTerms = "Bạn phải đồng ý với điều khoản!";
    }

    setShowAlert(Object.keys(newErrors).length > 0);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
      setShowAlert(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3>{title}</h3>

      {showAlert && (
        <div className="alert alert-danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra lại thông tin.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formName" className="form-label">Tên</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="formName"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Nhập tên (3-50 ký tự)"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="formAge" className="form-label">Tuổi</label>
          <input
            type="number"
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            id="formAge"
            name="age"
            value={state.age}
            onChange={handleChange}
            placeholder="Nhập tuổi (18-100)"
          />
          {errors.age && <div className="invalid-feedback">{errors.age}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="formEmail" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="formEmail"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Nhập email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="formPhone" className="form-label">Số điện thoại</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            id="formPhone"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại (10-15 chữ số)"
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="formGender" className="form-label">Giới tính</label>
          <select
            className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
            id="formGender"
            name="gender"
            value={state.gender}
            onChange={handleChange}
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
          {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={`form-check-input ${errors.agreeTerms ? 'is-invalid' : ''}`}
            id="formTerms"
            name="agreeTerms"
            checked={state.agreeTerms}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="formTerms">
            Tôi đồng ý với các điều khoản và điều kiện
          </label>
          {errors.agreeTerms && <div className="invalid-feedback">{errors.agreeTerms}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Gửi</button>
      </form>
    </div>
  );
};

MyForm2.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm2;