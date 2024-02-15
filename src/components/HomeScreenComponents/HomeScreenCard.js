import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../static/css/HomeScreenCard.css";

const HomeScreenCard = () => {
  return (
    <Container className=" mt-5 d-flex justify-content-center align-items-center">
      <style>
        {`

        `}
      </style>
      <Row>
        <Col xs={6} sm={4} md={4}>
          <Card className="mx-2 Card-hero">
            <Link
              to="/flowers"
              className="hero-card-head d-flex justify-content-center rounded"
              style={{ textDecoration: "none" }}
            >
              <h5>Flowers</h5>
            </Link>
            <Link to="/flowers" className="hero-card-image rounded">
              <Card.Img
                src="images\ImageHeroCard\Flowers.jpg"
                className="rounded"
                alt="Flower"
              />
            </Link>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={4}>
          <Card className="mx-2 Card-hero">
            <Link
              className="hero-card-head d-flex justify-content-center rounded"
              to="/bokeh"
              style={{ textDecoration: "none" }}
            >
              <h5>Bokeh</h5>
            </Link>
            <Link to="/bokeh" className="hero-card-image rounded">
              <Card.Img
                src="images\ImageHeroCard\Bokeh.jpg"
                className="rounded"
                alt="Flower"
              />
            </Link>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={4}>
          <Card className="mx-2 Card-hero">
            <Link
              to="/event-decoration"
              className="hero-card-head d-flex justify-content-center rounded text-center"
              style={{ textDecoration: "none" }}
            >
              <h5>Decoration</h5>
            </Link>
            <Link to="/event-decoration" className="hero-card-image rounded">
              <Card.Img
                src="images\ImageHeroCard\Event-Decoration.jpg"
                className="rounded"
                alt="Flower"
              />
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreenCard;
