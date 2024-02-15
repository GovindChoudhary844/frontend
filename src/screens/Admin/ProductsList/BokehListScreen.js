// BokehListScreen.js
import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Button, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import Paginate from "../../../components/Paginate";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../../../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../../../constants/productConstants";

function BokehListScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const searchParams = new URLSearchParams(location.search);
  let keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", 1, "Bokeh"));
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    keyword,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  const [search, setSearch] = useState("");

  return (
    <div>
      <style>
        {`
        /* Styles for large screens (992px and above) */
        @media only screen and (min-width: 992px) {
            .product-image{
              width:10%;
            }
        }
        

        /* Styles for medium screens (768px to 991px) */
        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .product-image{
            width:20% !important;
          }
        }
          
        `}
      </style>
      <Row className="align-item-center">
        <Col lg={9} md={9} sm={8}>
          <h1>Bokeh List</h1>
        </Col>
        <Col lg={3} md={3} sm={4} className="text-right">
          <Button
            className="my-lg-3 my-md-3"
            onClick={createProductHandler}
            size="sm"
          >
            <i className="fas fa-plus"></i>Create Product
          </Button>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : products && products.length ? (
        <div>
          <Form>
            <InputGroup className="my-3" style={{ zIndex: "-1" }}>
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
            </InputGroup>
          </Form>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th className="product-image">Image</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {products
                .filter((product) => product.category === "Bokeh")
                .map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>
                      <img
                        src={product.image}
                        alt="Product"
                        style={{ width: "100%" }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>Rs.{product.price}</td>
                    <td>{product.category}</td>
                    <td>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <Button variant="light" className="btn-sm" size="sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </div>
      ) : (
        <Message variant="info">No Products found</Message>
      )}
    </div>
  );
}

export default BokehListScreen;
