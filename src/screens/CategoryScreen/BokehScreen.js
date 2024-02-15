// BokehScreen.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Paginate from "../../components/Paginate";
import { listProducts } from "../../actions/productActions";

function BokehScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts("", 1, "bokeh"));
  }, [dispatch]);

  return (
    <div>
      <style>
        {`
        @media (max-width: 767px) {
          .Bokeh-Screen{
            padding: 1.5rem;
          }
        }
        
        `}
      </style>
      <Container className="Bokeh-Screen">
        <h1 className="mt-lg-5">Bokeh Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : products.length === 0 ? (
          <Message variant="info">No bokeh products available.</Message>
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
            <Paginate page={page} pages={pages} category="bokeh" />
          </div>
        )}
      </Container>
    </div>
  );
}

export default BokehScreen;
