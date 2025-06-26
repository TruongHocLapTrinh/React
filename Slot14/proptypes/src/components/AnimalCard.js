import React from "react";
import PropTypes from "prop-types";
import "./AnimalCard.css";

const showAdditional = (additional) => {
  if (!additional) {
    alert("No Additional Information");
    return;
  }
  const alertMessage = Object.entries(additional)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  alert(alertMessage);
};

const AnimalCard = ({
  name,
  scientificName,
  size,
  diet,
  additional,
  image,
}) => {
  return (
    <div className="animal-card">
      <img src={image} alt={name} className="animal-image" />
      <h3 style={{ textAlign: "left" }}>{name}</h3>
      <div className="info-section" style={{ backgroundColor: "white", padding: "10px", textAlign: "left" }}>
        <p>
          <strong>Scientific Name:</strong> {scientificName}
        </p>
        <p>
          <strong>Size:</strong> {size} kg
        </p>
        <p>
          <strong>Diet:</strong> {diet.join(", ")}
        </p>
      </div>
      <button
        className="btn btn-more-info"
        onClick={() => showAdditional(additional)}
      >
        More Info
      </button>
    </div>
  );
};

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  image: PropTypes.string.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
  },
};

export default AnimalCard;