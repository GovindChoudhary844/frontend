// AdminScreen.js
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminScreen() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasShow = () => setShowOffcanvas(true);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  return (
    <div>
      <Container fluid>
        <Row>
          <style>
            {`
              @media (max-width: 767px) {
                h1{
                  font-size: 1.3rem;
                }
                .icons-small-screen{
                  padding: 1rem;
                }
              }
              
            `}
          </style>

          <Col
            lg={2}
            md={3}
            xs={2}
            className="icons-small-screen mt-5"
            style={{
              borderRadius: "30px",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              zIndex: 1000,
            }}
          >
            <AdminSidebar />
          </Col>
          <Col lg={2} md={3} xs={2}>
            {/* <AdminSidebar /> */}
          </Col>

          <Col lg={9} md={8} xs={10} className="mx-md-3 p-3 ">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminScreen;
