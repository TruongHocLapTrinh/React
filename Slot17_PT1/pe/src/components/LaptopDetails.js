import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LaptopList.css'

const LaptopDetails = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/Laptops/${id}`);
        if (res.data && Object.keys(res.data).length > 0) {
          setLaptop(res.data);
        } else {
          setLaptop(null);
        }
      } catch {
        setLaptop(null);
      } finally {
        setLoading(false);
      }
    };
    fetchLaptop();
  }, [id]);

  if (loading) return <h2 className="text-center mt-4">Loading...</h2>;
  if (!laptop) return <h2 className="text-center mt-4">404 - Not found Laptop</h2>;

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ maxWidth: '600px' }} className="shadow">
        <Card.Img
          variant="top"
          src={laptop.image}
          alt={`${laptop.brand} ${laptop.model}`}
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>
            <strong>Year:</strong> {laptop.year} <br />
            <strong>Price:</strong> {laptop.price} <br />
          </Card.Text>
          <Link to="/laptops">
            <Button variant="secondary">Back to Laptop List</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LaptopDetails;
