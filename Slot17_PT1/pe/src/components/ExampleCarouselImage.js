import React from 'react';
import { Carousel } from 'react-bootstrap';

const ExampleCarouselImage = ({ images }) => {
  return (
    <Carousel>
      {Array.isArray(images) && images.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img.src}
            alt={img.alt || `Slide ${index}`}
          />
          {img.caption && (
            <Carousel.Caption>
              <h3>{img.caption}</h3>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ExampleCarouselImage;
