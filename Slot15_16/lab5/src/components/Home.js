import { Carousel, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import food1 from "../assets/images/menu-01.jpg"
import food2 from "../assets/images/menu-02.jpg"
import food3 from "../assets/images/menu-03.jpg"
import food4 from "../assets/images/menu-04.jpg"
import food5 from "../assets/images/menu-05.jpg"
import food6 from "../assets/images/menu-06.jpg"
import carousel1 from "../assets/images/slide1.jpg"
import carousel2 from "../assets/images/slide2.jpg"
import carousel3 from "../assets/images/slide3.jpg"

function Home() {
  const foodImages = [ food1, food2, food3, food4, food5, food6 ]

  return (
    <Container fluid className="p-0">
      {/* Hero Carousel */}
      <Carousel className="mb-4">
        <Carousel.Item> 
          <img
            className="d-block w-100"
            src={carousel1}
            alt="Celebration Ham - Masyadong Good!"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Food Slide 2"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Food Slide 3"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Food Categories */}
      <Container>
        <Row className="justify-content-center mb-4">
          {foodImages.map((image, index) => (
            <Col key={index} xs={6} md={2} className="text-center mb-3">
              <img
                src={image || "/placeholder.svg"}
                alt={`Food ${index + 1}`}
                className="rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </Col>
          ))}
        </Row>

        <div className="text-center">
          <h2 className="text-danger mb-4">This is Home Page</h2>
          <p className="lead">Welcome to our food quiz application!</p>
          <Link to="/quiz" className="btn btn-primary btn-lg">
            Take the Quiz
          </Link>
        </div>
      </Container>
    </Container>
  )
}

export default Home
