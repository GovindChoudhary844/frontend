// Product.js
import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <style>
        {`
        .card-text:last-child {
          font-size: 22px;
          font-weight:600;
        }
        /* Small screens (phones) */
        @media (max-width: 767px) {
          .All-product-Screen {
            padding: 0.5rem;
          }
          .card-text:last-child {
            font-size: 14px;
          }
          .rating{
            font-size: 12px;
            margin-top: -10px;
            margin-bottom: -20px;
          }
        }
        `}
      </style>
      <Card className="my-3 rounded">
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

          <Card.Text>Rs.{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
