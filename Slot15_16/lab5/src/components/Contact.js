import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

function Contact({ initialFormData, validationRules, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: initialFormData?.firstName || "",
    lastName: initialFormData?.lastName || "",
    username: initialFormData?.username || "",
    city: initialFormData?.city || "",
    state: initialFormData?.state || "",
    zip: initialFormData?.zip || "",
    agreeTerms: initialFormData?.agreeTerms || false,
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
      let isValid = true;
      if (validationRules) {
        if (
          validationRules.zip &&
          !new RegExp(validationRules.zip.pattern).test(formData.zip)
        ) {
          isValid = false;
        }
      }

      if (isValid) {
        setShowSuccess(true);
        if (onSubmit) {
          onSubmit(formData);
        }
        setTimeout(() => {
          setFormData({
            firstName: initialFormData?.firstName || "",
            lastName: initialFormData?.lastName || "",
            username: initialFormData?.username || "",
            city: initialFormData?.city || "",
            state: initialFormData?.state || "",
            zip: initialFormData?.zip || "",
            agreeTerms: initialFormData?.agreeTerms || false,
          });
          setValidated(false);
          setShowSuccess(false);
        }, 3000);
      }
    }
    setValidated(true);
  };

  return (
    <Container className="py-4" style={{ maxWidth: "1400px" }}>
      <Row className="justify-content-center">
        <Col md={12}>
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
                  <Form.Label style={{ fontSize: "1.25rem" }}>
                    First name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Mark"
                    style={{ fontSize: "1.25rem" }}
                    pattern={validationRules?.firstName?.pattern}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {validationRules?.firstName?.errorMessage ||
                      "Please provide a valid first name."}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback
                    type="valid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "1.25rem" }}>
                    Last name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Otto"
                    style={{ fontSize: "1.25rem" }}
                    pattern={validationRules?.lastName?.pattern}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {validationRules?.lastName?.errorMessage ||
                      "Please provide a valid last name."}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback
                    type="valid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "1.25rem" }}>
                    User Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="User name"
                    style={{ fontSize: "1.25rem" }}
                    pattern={validationRules?.username?.pattern}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {validationRules?.username?.errorMessage ||
                      "Please choose a username."}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback
                    type="valid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "1.25rem" }}>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="City"
                    style={{ fontSize: "1.25rem" }}
                    pattern={validationRules?.city?.pattern}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {validationRules?.city?.errorMessage ||
                      "Please provide a valid city."}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback
                    type="valid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "1.25rem" }}>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder="State"
                    style={{ fontSize: "1.25rem" }}
                    pattern={validationRules?.state?.pattern}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {validationRules?.state?.errorMessage ||
                      "Please provide a valid state."}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback
                    type="valid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "1.25rem" }}>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    placeholder="Zip"
                    style={{ fontSize: "1.25rem" }}
                    pattern={validationRules?.zip?.pattern}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {validationRules?.zip?.errorMessage ||
                      "Please provide a valid zip."}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback
                    type="valid"
                    style={{ fontSize: "1.25rem" }}
                  >
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
                label=" Agree to terms and conditions"
                feedback={
                  validationRules?.agreeTerms?.errorMessage ||
                  "You must agree before submitting."
                }
                feedbackType="invalid"
                style={{ fontSize: "1.25rem" }}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              style={{ fontSize: "1.25rem" }}
            >
              Submit form
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

Contact.propTypes = {
  initialFormData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    agreeTerms: PropTypes.bool,
  }),
  validationRules: PropTypes.shape({
    firstName: PropTypes.shape({
      pattern: PropTypes.string,
      errorMessage: PropTypes.string,
    }),
    lastName: PropTypes.shape({
      pattern: PropTypes.string,
      errorMessage: PropTypes.string,
    }),
    username: PropTypes.shape({
      pattern: PropTypes.string,
      errorMessage: PropTypes.string,
    }),
    city: PropTypes.shape({
      pattern: PropTypes.string,
      errorMessage: PropTypes.string,
    }),
    state: PropTypes.shape({
      pattern: PropTypes.string,
      errorMessage: PropTypes.string,
    }),
    zip: PropTypes.shape({
      pattern: PropTypes.string,
      errorMessage: PropTypes.string,
    }),
    agreeTerms: PropTypes.shape({
      errorMessage: PropTypes.string,
    }),
  }),
  onSubmit: PropTypes.func,
};

Contact.defaultProps = {
  initialFormData: {
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    agreeTerms: false,
  },
  validationRules: {},
  onSubmit: null,
};

export default Contact;