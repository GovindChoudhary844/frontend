import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  const navbarBrand = useSelector(
    (state) => state.navbar?.navbarBrand || "ShopyShop"
  );
  return (
    <div>
      <style>
        {`
        .hero-image {
          filter: brightness(0.5) blur(2px);
        }
        .hero-p-top {
          color: white;
          font-family: 'Mr De Haviland', cursive;
        }
        .hero-p-bottom{
          
        }
          @media (min-width: 992px) {
            .custom-carousel {
              height: 550px;
            }
            .hero-p-top {
              font-size: 4rem !important;
            }
            .hero-h1{
              color: white !important; 
              margin-top: -40px !important; 
              font-size: 4.5rem !important; 
            }
            .hero-p-bottom{
              font-size: 1.5rem !important;
            }
          }
          /* Styles for medium screens (768px to 991px) */
          @media (min-width: 768px) and (max-width: 991px) {
            .hero-p-top {
              font-size: 3rem !important;
            }
            .hero-h1{
              color: white !important; 
              margin-top: -40px !important; 
              font-size: 3rem !important; 
            }
            .hero-p-bottom{
              font-size: 1rem !important;
            }
          }

          /* Styles for small screens (up to 767px) */
          @media (max-width: 767px) {
            .hero-image {
              filter: brightness(0.5) blur(1px);
            }
            .hero-p-top {
              margin-top: 50% !important;
              font-size: 1.5rem !important;
            }
            .hero-h1-small{
              color: white !important; 
              margin-top: -30px !important; 
              font-size: 1.5rem !important; 
            }
            .hero-p-bottom-small{
              font-size: 0.8rem !important;
            }
          }
          

        `}
      </style>
      {/* large Screen Carousel */}
      <Carousel
        className="custom-carousel d-none d-md-block"
        style={{ overflow: "hidden" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="static\images\ImageCarousel\flowers.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="top-0 mt-5">
            <p className="mt-lg-5 fw-bolder hero-p-top">
              Welcome to {navbarBrand}
            </p>
            <h1 className="hero-h1">Florist's Dream</h1>
            <p className=" text-uppercase hero-p-bottom">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="static\images\ImageCarousel\flowers.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="top-0 mt-5">
            <p className="mt-lg-5 fw-bolder hero-p-top">
              Welcome to {navbarBrand}
            </p>
            <h1 className=" hero-h1">Second slide label</h1>
            <p
              className="text-uppercase hero-p-bottom"
              style={{ fontSize: "1rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="static\images\ImageCarousel\flowers.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="top-0 mt-5">
            <p className="mt-lg-5 fw-bolder hero-p-top">
              Welcome to {navbarBrand}
            </p>
            <h1 className="hero-h1">Third slide label</h1>
            <p className="text-uppercase hero-p-bottom">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Small Screen Carousel */}
      <Carousel
        className=" small-screen-carousel d-md-none"
        style={{ overflow: "hidden" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="static\images\ImageCarousel\small flower.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption className="top-0 mt-5">
            <p
              className="mt-5 display-2 fw-bolder hero-p-top"
              style={{ color: "white", fontFamily: "Mr De Haviland" }}
            >
              Welcome to {navbarBrand}
            </p>
            <h1 className="display-5 fw-bolder hero-h1-small">
              Firse slide label
            </h1>
            <p className="hero-p-bottom-small">
              This caption is for the small screen image.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="static\images\ImageCarousel\small flower.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption className="top-0 mt-5">
            <p
              className="mt-5 display-2 fw-bolder hero-p-top"
              style={{ color: "white", fontFamily: "Mr De Haviland" }}
            >
              Welcome to {navbarBrand}
            </p>
            <h1 className="display-3 fw-bolder hero-h1-small">
              Second slide label
            </h1>
            <p className="hero-p-bottom-small">
              This caption is for the small screen image.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="static\images\ImageCarousel\small flower.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption className="top-0 mt-5">
            <p
              className="mt-5 display-2 fw-bolder hero-p-top"
              style={{ color: "white", fontFamily: "Mr De Haviland" }}
            >
              Welcome to {navbarBrand}
            </p>
            <h1 className="display-3 fw-bolder hero-h1-small">
              Third slide label
            </h1>
            <p className="hero-p-bottom-small">
              This caption is for the small screen image.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
