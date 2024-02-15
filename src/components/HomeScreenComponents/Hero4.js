import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";

function Hero4() {
  // const colStyle = {
  //   backgroundImage: 'url("imagesimages\background-Flower.png")',
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   padding: "20px",
  // };
  return (
    <div className="my-lg-5 my-md-5">
      <style>
        {`
    .Hero4-hedding{
      margin-bottom: -1rem;
    }
    .background-col {
      background-image: url("static/images/image/background-Flower.png");
      background-position: right;
      background-repeat: no-repeat;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      .Hero4-hedding{
        font-size: 3rem !important;
      }
      .Hero4-head{
        font-size: 1.5rem !important;
      }
      .Hero4-para{
        font-size: 1rem !important;
      }
    }
    

    @media (max-width: 767px) {
      .Hero4-hedding{
        font-size: 3rem !important;
      }
      .Hero4-head{
        font-size: 1.5rem !important;
      }
      .Hero4-para{
        font-size: 1rem !important;
      }
    }
    
    
    `}
      </style>
      <Container>
        <Row className="p-lg-5">
          <Col lg={6} md={6} sm={12} className="background-col p-3">
            <p
              className="fw-bolder Hero4-hedding"
              style={{
                fontFamily: "Mr De Haviland",
                fontSize: "3.5rem",
                letterSpacing: "4px",
                color: "black",
              }}
            >
              Wonderful Gifts
            </p>
            <h1 className="fw-bolder Hero4-head" style={{ fontFamily: "Lora" }}>
              A perfect spot
            </h1>
            <p className="Hero4-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              molestiae modi eligendi aliquid, cumque consequuntur omnis porro
              facere ipsam cum impedit molestias vel qui incidunt eaque
              explicabo excepturi! Pariatur, cumque.
            </p>
            <Button variant="outline-dark">Read More</Button>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Image
              src="static\images\image\Hero4.jpg"
              className="p-lg-3 mt-md-5"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero4;
