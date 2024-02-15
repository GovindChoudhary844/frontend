// HomeScreen.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import MyCarousel from "../components/HomeScreenComponents/MyCarousel";
import SocialMediaIcon from "../components/SocialMediaIcon";
import Hero2 from "../components/HomeScreenComponents/Hero2";
import Hero3 from "../components/HomeScreenComponents/Hero3";
import Hero4 from "../components/HomeScreenComponents/Hero4";
import ResponsiveSlider from "../components/HomeScreenComponents/ResponsiveSlider";
import { listProducts } from "../actions/productActions";

function HomeScreen() {
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
    <Container fluid>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : products.length === 0 ? (
        <Message variant="info">No products available.</Message>
      ) : (
        <div>
          <div className="mt-lg-0 mt-md-2 mt-sm-0">
            <MyCarousel />
          </div>
          <SocialMediaIcon />
          <Hero2 />
          <Hero3 />
          <ResponsiveSlider products={products} />
          <Hero4 />
        </div>
      )}
    </Container>
  );
}

export default HomeScreen;
