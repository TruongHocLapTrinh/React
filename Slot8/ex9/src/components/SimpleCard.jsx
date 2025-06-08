import React from "react";
import { Card } from "react-bootstrap";

const styles = {
    card: {
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        padding: "1rem",
    },
    img: {
        width: "40%",
        height: "auto",
        backgroundColor: "#f8f9fa",
        objectFit: "cover",
    },
    body: {
        padding: "1rem",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    title: {
        fontSize: "1.2rem",
        color: "#d35400",
        fontWeight: "bold",
        marginBottom: "5px",
        textAlign: "center",
    },
    text: {
        fontSize: "0.9rem",
        color: "#333",
        textAlign: "center",
    },
};

const SimpleCard = () => {
  return (
    <Card style={styles.card}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPjx9Fqt-4lb-AgyPB5o_J7CbVvGyZiqctQ&s"
        style={styles.img}
      />
      <Card.Body>
        <Card.Title style={styles.title}>TruongLNDE</Card.Title>
        <Card.Text style={styles.text}>
          I'm currently a student at FPTU DA NANG.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SimpleCard;
