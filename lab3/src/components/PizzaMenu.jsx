import { Row, Col, Card, Button, Badge } from "react-bootstrap"
import "./PizzaMenu.css"
import img1 from "../assets/menu1.jpg"
import img2 from "../assets/menu2.jpg"
import img3 from "../assets/menu3.jpg"
import img4 from "../assets/menu4.jpg"

export default function PizzaMenu() {
  const pizzas = [
    {
      id: 1,
      name: "Margherita Pizza",
      image: img1,
      price: 12.99,
      originalPrice: 16.99,
      onSale: true,
    },
    {
      id: 2,
      name: "Mushroom Pizza",
      image: img2,
      price: 13.99,
    },
    {
      id: 3,
      name: "Hawaiian Pizza",
      image: img3,
      price: 14.99,
      isNew: true,
    },
    {
      id: 4,
      name: "Pesto Pizza",
      image: img4,
      price: 15.99,
      originalPrice: 18.99,
      onSale: true,
    },
  ]

  return (
    <Row xs={1} lg={4} className="g-4">
      {pizzas.map((pizza) => (
        <Col key={pizza.id}>
          <Card className="pizza-card h-100 position-relative">
            {pizza.onSale && <Badge className="pizza-badge sale-badge sale-badge-orange">SALE</Badge>}
            {pizza.isNew && <Badge className="pizza-badge new-badge">NEW</Badge>}
            <Card.Img variant="top" src={pizza.image || "/placeholder.svg"} alt={pizza.name} className="pizza-image" />
            <Card.Body className="d-flex flex-column pizza-card-body">
              <Card.Title className="mb-3 pizza-title">{pizza.name}</Card.Title>
              <div className="mt-auto">
                <div className="mb-2">
                  {pizza.originalPrice ? (
                    <div>
                      <span className="original-price me-2">${pizza.originalPrice.toFixed(2)}</span>
                      <span className="sale-price">${pizza.price.toFixed(2)}</span>
                    </div>
                  ) : (
                    <span className="regular-price">${pizza.price.toFixed(2)}</span>
                  )}
                </div>
                <Button className="buy-btn w-100">
                  Buy
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
