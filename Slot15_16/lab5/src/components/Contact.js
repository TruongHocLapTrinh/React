import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    agreeTerms: false,
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity() === true) {
      setShowSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          city: "",
          state: "",
          zip: "",
          agreeTerms: false,
        });
        setValidated(false);
        setShowSuccess(false);
      }, 3000);
    }
    setValidated(true);
  };

  return (
    <Container className="py-4" style={{ maxWidth: '100%' }}>
      <Row className="justify-content-center">
        <Col md={12} >
          <h1 className="mb-4">Contact Us</h1>

          {showSuccess && (
            <Alert variant="success">
              <Alert.Heading>Success!</Alert.Heading>
              <p>
                Your form has been submitted successfully. We'll get back to you
                soon!
              </p>
            </Alert>
          )}

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.25rem' }}>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Mark"
                    style={{ fontSize: '1.25rem' }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ fontSize: '1.25rem' }}>
                    Please provide a valid first name.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid" style={{ fontSize: '1.25rem' }}>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.25rem' }}>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Otto"
                    style={{ fontSize: '1.25rem' }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ fontSize: '1.25rem' }}>
                    Please provide a valid last name.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid" style={{ fontSize: '1.25rem' }}>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.25rem' }}>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="User name"
                    style={{ fontSize: '1.25rem' }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ fontSize: '1.25rem' }}>
                    Please choose a username.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid" style={{ fontSize: '1.25rem' }}>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.25rem' }}>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="City"
                    style={{ fontSize: '1.25rem' }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ fontSize: '1.25rem' }}>
                    Please provide a valid city.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid" style={{ fontSize: '1.25rem' }}>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder="State"
                    style={{ fontSize: '1.25rem' }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ fontSize: '1.25rem' }}>
                    Please provide a valid state.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid" style={{ fontSize: '1.25rem' }}>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    placeholder="Zip"
                    style={{ fontSize: '1.25rem' }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ fontSize: '1.25rem' }}>
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid" style={{ fontSize: '1.25rem' }}>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                style={{ fontSize: '1.25rem' }}
              />
            </Form.Group>

            <Button type="submit" variant="primary" style={{ fontSize: '1.25rem' }}>
              Submit form
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
