import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Username và password không được để trống!");
      return;
    }

    if (username === "admin" && password === "123") {
      login(username);
      alert(`Login successfully with username: ${username}`);
      navigate("/posts");
    } else {
      setError("Sai tài khoản hoặc mật khẩu.");
    }
  };

  return (
    <Container className="my-5">
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </Container>
  );
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
};
