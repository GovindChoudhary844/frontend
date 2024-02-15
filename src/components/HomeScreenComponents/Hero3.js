import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero3() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container className="my-5" style={{ backgroundColor: "#fff0e9" }}>
      <style>
        {`
          .Hero-card{
            // width: 20rem;
            display: flex;
            background-color: #fff0e9;
            cursor: pointer;
            border-color: #fff0e9;
          }
          .Hero-card-head{
            transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            height: 40px;
            padding: 10px 5px 5px 5px;
            margin: 0 5px 0 5px;
          }
          .Hero-card:hover .Hero-card-head{
            transform: translateY(-1em);
          }
          .Hero-card-image{
            position: relative;
            top: -30px;
            display: grid;
            gap: 10px;
            background-color: #ffaeeb;
            transition: 1s; 
          }

          .Hero-card-image:hover{
            filter: brightness(0.5);
          }

          .Hero-card-text-Bottom{
            text-decoration: none;
            font-family: Lora;
            font-size: 1.5rem;
            margin-top: -0.5rem;
          }

          /* Small screens (phones) */
          @media only screen and (max-width: 600px) {
            
          }

          
          /* Extra-small devices (phones) */
          @media only screen and (max-width: 767px) {  
            .Hero3-hedding{
              font-size: 2.8rem !important;
            }
            .Hero-card{
              width: 15rem;
            }
          }

        /* Styles for medium screens (768px to 991px) */
        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .Hero3-hedding{
            font-size: 2.8rem !important;
          }
          .Hero-card-text-Bottom{
            font-size: 1.2rem !important;
          }
        }

         
        `}
      </style>
      <Row>
        <Container className="my-lg-4 my-md-4">
          <Row className="mx-3 my-5" style={{ justifyContent: "space-around" }}>
            <p
              className="d-flex justify-content-center text-center fw-bolder Hero3-hedding"
              style={{
                fontFamily: "Mr De Haviland",
                fontSize: "3.5rem",
                letterSpacing: "4px",
                color: "black",
              }}
            >
              Our Wonderful Arrangements
            </p>
            <Row className="my-lg-5 my-md-5 my-5">
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className="d-flex justify-content-center p-2"
              >
                <div>
                  <Card className="Hero-card">
                    <Link
                      to="/flowers"
                      onClick={scrollToTop}
                      className="Hero-card-head d-flex justify-content-center rounded"
                      style={{ textDecoration: "none", background: "#FF8A8A" }}
                    >
                      <h5>Flowers</h5>
                    </Link>
                    <Link
                      to="/flowers"
                      onClick={scrollToTop}
                      className="rounded"
                    >
                      <Card.Img
                        src="static\images\ImageHeroCard\Flowers.jpg"
                        className="Hero-card-image rounded"
                        alt="Flower"
                      />
                    </Link>
                  </Card>
                  <Link
                    to="/flowers"
                    onClick={scrollToTop}
                    className="d-flex justify-content-center rounded Hero-card-text-Bottom"
                  >
                    Flowers
                  </Link>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className="d-flex justify-content-center p-2"
              >
                <div>
                  <Card className="Hero-card">
                    <Link
                      to="/bokeh"
                      onClick={scrollToTop}
                      className="Hero-card-head d-flex justify-content-center rounded"
                      style={{ textDecoration: "none", background: "#A0AFB7" }}
                    >
                      <h5>Bokeh</h5>
                    </Link>
                    <Link to="/bokeh" onClick={scrollToTop} className="rounded">
                      <Card.Img
                        src="static\images\ImageHeroCard\Bokeh.jpg"
                        className="Hero-card-image rounded"
                        alt="Flower"
                      />
                    </Link>
                  </Card>
                  <Link
                    to="/bokeh"
                    onClick={scrollToTop}
                    className="d-flex justify-content-center rounded Hero-card-text-Bottom"
                  >
                    Bokeh
                  </Link>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className="d-flex justify-content-center p-2"
              >
                <div>
                  <Card className="Hero-card">
                    <Link
                      to="/event-decoration"
                      onClick={scrollToTop}
                      className="Hero-card-head d-flex justify-content-center rounded"
                      style={{ textDecoration: "none", background: "#C8A2C8" }}
                    >
                      <h5>Decoration</h5>
                    </Link>
                    <Link
                      to="/event-decoration"
                      onClick={scrollToTop}
                      className="rounded"
                    >
                      <Card.Img
                        src="static\images\ImageHeroCard\Event-Decoration.jpg"
                        className="Hero-card-image rounded"
                        alt="Flower"
                      />
                    </Link>
                  </Card>
                  <Link
                    to="/event-decoration"
                    onClick={scrollToTop}
                    className="d-flex justify-content-center rounded Hero-card-text-Bottom"
                  >
                    Event Decoration's
                  </Link>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Hero3;
