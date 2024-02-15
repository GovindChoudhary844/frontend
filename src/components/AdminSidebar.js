import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AdminSidebar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <style>
        {`
          .Sidebar {
            color: black;
          }
          
          .custom-dropdown-title {
            color: white !important;
          }

          @media (max-width: 767px) {
            .icon-only {
              display: none;
            }
          }


         
        `}
      </style>
      <Container fluid style={{ height: "80vh" }}>
        <Navbar expand="lg" variant="light" collapseOnSelect>
          <Nav className="flex-column mx-md-4 mt-5">
            <LinkContainer to="/admin" onClick={scrollToTop}>
              <Nav.Link className="Sidebar">
                <i className="fa-solid fa-house"></i>
                <span className="icon-only">DashBoard</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/userlist" onClick={scrollToTop}>
              <Nav.Link className="Sidebar">
                <i className="fa-solid fa-user"></i>
                <span className="icon-only">Users</span>
              </Nav.Link>
            </LinkContainer>

            {/* Clickable Products section with dropdown */}
            <div>
              <NavDropdown
                title={
                  <>
                    <i className="fa-solid fa-cart-flatbed"></i>{" "}
                    <span className="icon-only">Products</span>
                  </>
                }
                id="basic-nav-dropdown"
                className="Sidebar custom-dropdown-title"
              >
                <NavDropdown.Item as="div">
                  <LinkContainer to="/admin/productlist" onClick={scrollToTop}>
                    <Nav.Link className="Sidebar">All Products</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>

                <NavDropdown.Item as="div">
                  <LinkContainer
                    to="/admin/productlist/flower"
                    onClick={scrollToTop}
                  >
                    <Nav.Link className="Sidebar">Flower</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>

                <NavDropdown.Item as="div">
                  <LinkContainer
                    to="/admin/productlist/bokeh"
                    onClick={scrollToTop}
                  >
                    <Nav.Link className="Sidebar">Bokeh</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <LinkContainer to="/admin/eventlist" onClick={scrollToTop}>
              <Nav.Link className="Sidebar">
                <i className="fa-solid fa-tree-decorated"></i>
                <span className="icon-only">Event Decoration</span>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/admin/orderlist" onClick={scrollToTop}>
              <Nav.Link className="Sidebar">
                <i className="fa-solid fa-truck-fast"></i>
                <span className="icon-only">Orders</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/settings" onClick={scrollToTop}>
              <Nav.Link className="Sidebar">
                <i className="fa-solid fa-gear"></i>
                <span className="icon-only">Settings</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default AdminSidebar;
