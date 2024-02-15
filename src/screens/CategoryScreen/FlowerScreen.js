// FlowerScreen.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Paginate from "../../components/Paginate";
import { listProducts } from "../../actions/productActions";

function FlowersScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts("", 1, "flower"));
  }, [dispatch]);

  return (
    <div>
      <style>
        {`
        @media (max-width: 767px) {
          .Flower-Screen{
            padding: 1.5rem;
          }
        }
        
        `}
      </style>
      <Container className="Flower-Screen">
        <h1 className="text-center mt-lg-3">Flower</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : products.length === 0 ? (
          <Message variant="info">No flower products available.</Message>
        ) : (
          <div>
            <Row>
              {products.map((product) => (
                <Col
                  key={product._id}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className="p-lg-2 p-md-1 p-1"
                >
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate page={page} pages={pages} category="flower" />
          </div>
        )}
      </Container>
    </div>
  );
}

export default FlowersScreen;
