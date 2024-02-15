// Header.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navbarBrand = useSelector(
    (state) => state.navbar?.navbarBrand || "Flowers"
  );
  useEffect(() => {
    document.title = navbarBrand;
  }, [navbarBrand]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="mt-5">
      <style>
        {`
          .dropdown:hover .dropdown-menu {
            display: block;
          }


          .custom-navbar{
            background-color: rgb(0, 0, 0); 
          }

          .custom-navbar .nav-link {
            color: rgba(255, 255, 255, 1) !important; 
          }
          
          .custom-navbar .nav-link:hover {
            color: rgba(255, 255, 255, 0.7) !important; 
          }

          /* styles.css or your preferred CSS file */
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .navbar-bottom-marquee{
            overflow: hidden;
          }
          
          .marquee-text {
            white-space: nowrap;
            overflow: hidden;
            animation: marquee 20s linear infinite;
          }

          @media (min-width: 1400px) { 
            .navbar-bottom-marquee{
              background-color: #FFC0CB;
              color: black;
              margin-top: 3.2rem;
            }
           }

          @media (min-width: 1200px) and (max-width: 1399.98px){
            .navbar-bottom-marquee{
              background-color: #FFC0CB;
                color: black;
                margin-top: 4rem;
            }
          }

          @media (min-width: 992px) and (max-width: 1199.98px)  {
            .navbar-bottom-marquee{
              background-color: #FFC0CB;
              color: black;
              margin-top: 4rem;
            }
          }
          /* Medium devices (tablets, 768px and up) */
          @media (min-width: 768px) and (max-width: 991.98px) {
            .navbar-bottom-marquee{
              background-color: #FFC0CB;
              color: black;
              margin-top: 2.5rem !important;
            }
            .Search-Box{
              width: 35%;
            }
          }

            /* Styles for small screens (up to 767px) */
          @media (max-width: 767.98px) {
            .navbar-bottom-marquee{
              background-color: #FFC0CB;
              color: black;
              margin-top: 2.5rem !important;
            }
            .menu{
              margin-left: 10px;
              margin-right: 10px;
            }
          }

          
          
        `}
      </style>
      <Container fluid>
        <Row>
          <Col>
            <Navbar
              className="custom-navbar"
              collapseOnSelect
              expand="lg"
              fixed="top"
              bg="dark"
              data-bs-theme="dark"
            >
              <Container className="menu">
                <Navbar.Brand href="/">{navbarBrand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link href="/" onClick={scrollToTop}>
                      Home
                    </Nav.Link>
                    <Nav.Link href="/cart" onClick={scrollToTop}>
                      Cart
                    </Nav.Link>
                    <Nav.Link href="/contact-us" onClick={scrollToTop}>
                      Contact Us
                    </Nav.Link>
                    <NavDropdown title="CATEGORY" id="collapsible-nav-dropdown">
                      <NavDropdown.Item
                        href="/all-Product"
                        onClick={scrollToTop}
                      >
                        All Products
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/flowers" onClick={scrollToTop}>
                        Flowers
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/bokeh" onClick={scrollToTop}>
                        Bokeh / Bouquet
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/events" onClick={scrollToTop}>
                        Event Decoration
                      </NavDropdown.Item>
                    </NavDropdown>
                    {userInfo ? (
                      <NavDropdown title={userInfo.name} id="username">
                        <NavDropdown.Item href="/profile" onClick={scrollToTop}>
                          Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={logoutHandler}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <Nav.Link href="/login" onClick={scrollToTop}>
                        <i className="fas fa-user"></i>Login
                      </Nav.Link>
                    )}
                  </Nav>
                  <Nav>
                    <div className="Search-Box">
                      <SearchBox />
                    </div>
                    {userInfo && userInfo.isAdmin && (
                      <Nav.Link
                        href="/admin"
                        onClick={scrollToTop}
                        className="admin"
                      >
                        DashBoard
                      </Nav.Link>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Row lg={12} className="navbar-bottom-marquee">
          <div className="marquee-text" style={{ color: "black" }}>
            Blossoming Moments, Exquisite Decor, and Gift Elegance - Your
            Ultimate Destination for Unforgettable Celebrations
          </div>
        </Row>
      </Container>
      <Container fluid></Container>
    </header>
  );
}

export default Header;
