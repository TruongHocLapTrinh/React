import { Carousel } from "react-bootstrap"
import "./HeroSection.css"
import img1 from "../assets/pizza1.jpg"
import img2 from "../assets/pizza2.jpg"
import img3 from "../assets/pizza3.jpg"
import img4 from "../assets/pizza4.jpg"
import img5 from "../assets/pizza5.jpg"

export default function HeroSection() {
  const carouselItems = [
    { image: img1, alt: "Pizza 1" },
    { image: img2, alt: "Pizza 2" },
    { image: img3, alt: "Pizza 3" },
    { image: img4, alt: "Pizza 4" },
    { image: img5, alt: "Pizza 5" },
  ]

  return (
    <div className="hero-section" style={{padding: "0 0 50px 0"}}>
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img src={item.image || "/placeholder.svg"} className="d-block w-100 carousel-image" alt={item.alt} />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption className="hero-caption">
              <h1 className="hero-title">Neapolitan Pizza</h1>
              <p className="hero-description">
                If you are looking for a traditional Italian pizza, the Neapolitan is the best option!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
