import { Container, Row, Col, Card } from "react-bootstrap"

function About() {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card>
            <Card.Body>
              <h1 className="text-center mb-4">About Our Food Quiz App</h1>
              <p className="lead">
                Welcome to our interactive food quiz application! This platform is designed to test and expand your
                knowledge about food, cooking, and culinary traditions from around the world.
              </p>

              <h3>Features:</h3>
              <ul>
                <li>
                  <strong>Interactive Quiz:</strong> Test your food knowledge with our engaging quiz questions
                </li>
                <li>
                  <strong>Latest Food News:</strong> Stay updated with the latest food trends and news
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Easy navigation with React Router
                </li>
                <li>
                  <strong>Responsive Design:</strong> Works perfectly on all devices
                </li>
              </ul>

              <h3>About the Developer:</h3>
              <p>
                This application was built using React.js and React Router for seamless navigation. It demonstrates
                modern web development practices including component-based architecture, state management, and
                responsive design with Bootstrap.
              </p>

              <h3>Technologies Used:</h3>
              <ul>
                <li>React.js</li>
                <li>React Router</li>
                <li>React Bootstrap</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About
