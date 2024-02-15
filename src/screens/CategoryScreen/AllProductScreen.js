// AllProductScreen.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Paginate from "../../components/Paginate";
import { listProducts } from "../../actions/productActions";

import { useNavigate, useLocation } from "react-router-dom";

function AllProductScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const keyword = new URLSearchParams(location.search).get("keyword");

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <style>
        {`
        @media (max-width: 767px) {
          .All-product-Screen{
            padding: 1.5rem;
          }
        }
        
        `}
      </style>
      <Container className="All-product-Screen">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : products.length === 0 ? (
          <Message variant="info">No bokeh products available.</Message>
        ) : (
          <div>
            <h1 className="text-center mt-lg-3">Our Latest Products</h1>
            <Container>
              <Row>
                {products.map((product) => (
                  <Col
                    key={product._id}
                    xs={6}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                    className="p-lg-2 p-md-2 p-1"
                  >
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              {/* <Paginate page={page} pages={pages} keyword={keyword} /> */}
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllProductScreen;
