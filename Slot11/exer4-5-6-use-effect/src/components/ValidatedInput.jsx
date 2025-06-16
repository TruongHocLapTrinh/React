import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực đầu vào
const validateInput = (value) => {
  return value.length >= 5; // Giả sử giá trị phải có ít nhất 5 ký tự
};

function ValidatedInput() {
  const [value, setValue] = useState(""); // State lưu trữ giá trị đầu vào
  const [isValid, setIsValid] = useState(true); // State theo dõi tính hợp lệ
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const isValidInput = validateInput(value);
    setIsValid(isValidInput);

    if (!isValidInput) {
      setErrorMessage("Giá trị phải có ít nhất 5 ký tự.");
    } else {
      setErrorMessage("");
    }
  }, [value]);

  return (
    <Form style={{maxWidth: 500, display: 'inline-block'}}>
      <Form.Group controlId="validatedInput" style={{marginBottom: 5}}>
        <Form.Label>Nhập 1 giá trị</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isValid={isValid}
          isInvalid={!isValid}
          style={{padding: 10}}
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default ValidatedInput;