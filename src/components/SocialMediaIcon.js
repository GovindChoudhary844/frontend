import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../static/css/SocialMediaIcon.css";

const SocialMediaIcon = () => {
  return (
    <div>
      <Container className="main">
        <Row>
          <button as={Link} to="/" target="_blank" className="card1">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </button>
          <button as={Link} to="/" target="_blank" className="card2">
            <i className="fa-brands fa-facebook fa-lg"></i>
          </button>
          <button as={Link} to="/" target="_blank" className="card3">
            <i className="fa-brands fa-whatsapp fa-lg"></i>
          </button>
          <button as={Link} to="/" target="_blank" className="card4">
            <i className="fa-brands fa-youtube fa-lg"></i>
          </button>
        </Row>
      </Container>
    </div>
  );
};

export default SocialMediaIcon;
