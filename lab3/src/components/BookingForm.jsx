import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "./BookingForm.css"

export default function BookingForm() {
  return (
    <Container className="booking-container">
      <Form className="booking-form">
        <Row className="mb-3">
          <Col md={4} className="mb-3 mb-md-0">
            <Form.Control type="text" placeholder="Your Name *" name="name" required className="booking-input" />
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <Form.Control type="email" placeholder="Your Email *" name="email" required className="booking-input" />
          </Col>
          <Col md={4}>
            <Form.Select name="dateService" required className="booking-select">
              <option value="">Select a Service *</option>
              <option value="lunch">Lunch (12:00 - 15:00)</option>
              <option value="dinner">Dinner (18:00 - 22:00)</option>
              <option value="weekend-brunch">Weekend Brunch (10:00 - 14:00)</option>
              <option value="late-night">Late Night (22:00 - 01:00)</option>
            </Form.Select>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Please write your requests..."
            name="message"
            className="booking-textarea"
          />
        </Form.Group>
        <Button className="send-btn" style={{display: 'block'}}>Send Message</Button>
      </Form>
    </Container>
  )
}
