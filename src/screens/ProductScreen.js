// ProductScreen.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
  Container,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

function ProductScreen() {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isReviewExpanded, setIsReviewExpanded] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(id));
  }, [dispatch, id, successProductReview]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(id, { rating, comment }));
  };

  if (!product) {
    return <Message variant="danger">Product not found</Message>;
  }

  return (
    <Container>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading && <Loader />}
      {userInfo && userInfo.isAdmin && (
        <LinkContainer to={`/admin/product/${product._id}/edit`}>
          <Button className="btn-sm" variant="outline-dark">
            <i className="fas fa-edit"></i>Edit Product
          </Button>
        </LinkContainer>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            <Col md={6}>
              <Image src={product?.image} alt={product?.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product?.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Rating
                    value={product?.rating}
                    text={`${product?.numReviews} reviews`}
                    color={"#f8e825"}
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <h4>Price : Rs.{product?.price}</h4>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h5
                    onClick={() =>
                      setIsDescriptionExpanded(!isDescriptionExpanded)
                    }
                  >
                    Description :-
                    <br />
                  </h5>
                  {isDescriptionExpanded && <p>{product?.description}</p>}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5 onClick={() => setIsReviewExpanded(!isReviewExpanded)}>
                    Write a review here :-
                  </h5>
                  {isReviewExpanded && (
                    <>
                      {loadingProductReview && <Loader />}
                      {successProductReview && (
                        <Message variant="success">Review Submitted</Message>
                      )}
                      {errorProductReview && (
                        <Message variant="danger">{errorProductReview}</Message>
                      )}

                      {userInfo ? (
                        <Form onSubmit={submitHandler}>
                          <Form.Group className="my-3" controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Select
                              as="select"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="1">1 - Poor</option>
                              <option value="2">2 - Fail</option>
                              <option value="3">3 - Good</option>
                              <option value="4">4 - Very Good</option>
                              <option value="5">5 - Excellent</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group className="my-3" controlId="comment">
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows="5"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></Form.Control>
                          </Form.Group>

                          <Button
                            className="my-2"
                            disabled={loadingProductReview}
                            type="submit"
                            variant="outline-primary"
                          >
                            Submit
                          </Button>
                        </Form>
                      ) : (
                        <Message variant="info">
                          Please <Link to="/login">login</Link> to write a
                          Review
                        </Message>
                      )}
                    </>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>Rs.{product?.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product?.countInStock > 0
                          ? "In Stock"
                          : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product?.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col xs="auto" className="my-1">
                          <Form.Select
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Select>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      variant="outline-dark"
                      disabled={product?.countInStock === 0}
                      type="button"
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>

          <Row className="my-5">
            <Col md={6}>
              <h4>Reviews</h4>
              {(!product.reviews || product.reviews.length === 0) && (
                <Message variant="info">No Reviews</Message>
              )}

              <ListGroup variant="flush">
                {product.reviews &&
                  product.reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} color="#f8e825" />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}

export default ProductScreen;
