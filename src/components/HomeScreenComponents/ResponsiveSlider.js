import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResponsiveSlider({ products }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <style>
        {`
        .slick-next {
          right: 5%;
        }
        .slick-next:before {
          color: Black;
          font-size:30px;
        }

        .slick-prev {
          left: 5%;
          z-index:1
        }
        .slick-prev:before {
          color: Black;
          font-size:30px;
        }
        `}
      </style>
      <h2
        className="text-center my-lg-5 my-md-5"
        style={{ fontFamily: "Lora" }}
      >
        Our Products
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <Row key={product._id} className="p-1">
            <Col>
              <Card className="rounded" style={{ height: "50%" }}>
                <Link to={`/product/${product._id}`} onClick={scrollToTop}>
                  <Card.Img src={product.image} />
                </Link>

                <Card.Body>
                  <Link
                    to={`/product/${product._id}`}
                    onClick={scrollToTop}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Title
                      as="div"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong>{product.name}</strong>
                    </Card.Title>
                  </Link>

                  <Card.Text as="div">
                    <div className="my-3 rating">
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        color={"#f8e825"}
                        className="text-muted"
                      />
                    </div>
                  </Card.Text>

                  <Card.Text as="h3">Rs.{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Slider>
    </div>
  );
}

export default ResponsiveSlider;
