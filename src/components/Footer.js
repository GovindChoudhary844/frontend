import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const navbarBrand = useSelector(
    (state) => state.navbar?.navbarBrand || "ShopyShop"
  );
  return (
    <footer>
      <Container fluid>
        <Row>
          <Row>
            <div
              className="justify-content-around bg-black text-center p-5"
              style={{ color: "white" }}
            >
              <Row className="p-lg-5 p-md-5">
                <Col lg={3} md={6} sm={6}>
                  <p style={{ fontSize: "3rem", fontFamily: "Mr De Haviland" }}>
                    {navbarBrand}
                  </p>
                  <p>
                    Blossoming Moments, Exquisite Decor, and Gift Elegance –
                    Your Ultimate Destination for Unforgettable Celebrations
                  </p>
                </Col>
                <Col lg={3} md={6} sm={6}>
                  <h4
                    className="mb-4"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontFamily: "Lora",
                    }}
                  >
                    Working Hours
                  </h4>
                  <p>
                    Monday : 7AM – 11:30PM <br />
                    Tuesday : 7AM – 11:30PM
                    <br />
                    Wednesday : 7AM – 11:30PM
                    <br />
                    Thursday : 7AM – 11:30PM <br />
                    Friday : 7AM – 11:30PM <br />
                    Saturday :7AM – 11:30PM <br />
                    Sunday : 7AM – 11:30PM
                    <br />
                  </p>
                </Col>
                <Col lg={3} md={6} sm={5}>
                  <h4
                    className="mb-4 my-md-4"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontFamily: "Lora",
                    }}
                  >
                    Contact Us
                  </h4>
                  <p>
                    Address: New Delhi, Delhi <br />
                    Phone 1: 9876543211 <br />
                    Phone 2: 9876543211 <br />
                  </p>
                </Col>
                <Col lg={3} md={6} sm={5}>
                  <h4
                    className="mb-4 my-md-4"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontFamily: "Lora",
                    }}
                  >
                    Our Socials
                  </h4>
                  <div>
                    <Link to="/" target="_blank">
                      <i
                        className="fa-brands fa-facebook fa-2x mx-2"
                        style={{ color: "#005eff" }}
                      ></i>
                    </Link>
                    <Link to="/" target="_blank">
                      <i
                        className="fa-brands fa-instagram fa-2x mx-2"
                        style={{ color: "#E4405F" }}
                      ></i>
                    </Link>
                    <Link to="/" target="_blank">
                      <i
                        className="fa-brands fa-whatsapp fa-2x mx-2"
                        style={{ color: "#25D366" }}
                      ></i>
                    </Link>
                    <Link to="/" target="_blank">
                      <i
                        className="fa-brands fa-youtube fa-2x mx-2"
                        style={{ color: "#CD201F" }}
                      ></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>

          <Col
            className="bg-black text-center py-3"
            style={{ borderTop: "1px solid white", color: "white" }}
          >
            Copyright &copy; {navbarBrand}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
