import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Hàm xác thực email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Hàm xác thực mật khẩu
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // useEffect để kiểm tra tính hợp lệ của form
  useEffect(() => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    // Chỉ hiển thị lỗi nếu người dùng đã nhập (touched)
    if (isEmailTouched && !isEmailValid) {
      setEmailError('Email không hợp lệ, vui lòng nhập lại!');
    } else {
      setEmailError('');
    }
    if (isPasswordTouched && !isPasswordValid) {
      setPasswordError('Mật khẩu phải có ít nhất 8 ký tự!');
    } else {
      setPasswordError('');
    }

    // Kích hoạt nút Submit chỉ khi cả hai trường đều hợp lệ
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password, isEmailTouched, isPasswordTouched]);

  // Xử lý khi người dùng nhấn Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Form đã được gửi thành công!');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Form Validation</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label style={{display: 'flex'}}>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEmailTouched(true);
            }}
            isInvalid={isEmailTouched && !!emailError}
          />
          <Form.Control.Feedback type="invalid" style={{ color: 'red', display: isEmailTouched && !!emailError ? 'block' : 'none' }}>
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label style={{display: 'flex'}}>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsPasswordTouched(true);
            }}
            isInvalid={isPasswordTouched && !!passwordError}
          />
          <Form.Control.Feedback type="invalid" style={{ color: 'red', display: isPasswordTouched && !!passwordError ? 'block' : 'none' }}>
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isFormValid} style={{display: 'flex'}}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormValidation;