import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Hero2() {
  return (
    <Container className="my-lg-5 mt-md-3 my-5">
      <Row>
        <Container className="mt-lg-5 mt-md-5">
          <Row
            className="mx-1 my-lg-5 my-md-5 my-5"
            style={{ justifyContent: "space-around" }}
          >
            <Col
              className="px-md-2 px-lg-5  mb-5"
              sm={12}
              md={4}
              lg={4}
              style={{ textAlign: "center" }}
            >
              <i
                className="fa-light fa-flower-daffodil fa-3x"
                style={{ color: "#000000" }}
              ></i>
              <p style={{ fontFamily: "Lora" }}>READY TO BE IMPRESSED</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                numquam!
              </p>
            </Col>
            <Col
              className="px-md-2 px-lg-5  mb-5"
              sm={12}
              md={4}
              lg={4}
              style={{ textAlign: "center" }}
            >
              <i
                className="fa-light fa-trillium fa-3x"
                style={{ color: "#000000" }}
              ></i>
              <p style={{ fontFamily: "Lora" }}>READY TO BE IMPRESSED</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                numquam!
              </p>
            </Col>
            <Col
              className="px-md-2 px-lg-5"
              sm={12}
              md={4}
              lg={4}
              style={{ textAlign: "center" }}
            >
              <i
                className="fa-light fa-flower-tulip fa-3x"
                style={{ color: "#000000" }}
              ></i>
              <p style={{ fontFamily: "Lora" }}>READY TO BE IMPRESSED</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                numquam!
              </p>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Hero2;
