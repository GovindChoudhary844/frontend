// SettingsScreen.js

import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateNavbarBrand } from "../../actions/navbarActions";

function SettingsScreen() {
  const [newNavbarBrand, setNewNavbarBrand] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateNavbarBrand(newNavbarBrand));
  };

  return (
    <Container>
      <h1>Settings</h1>

      <Container>
        <Col md={6}>
          <Form>
            <Form.Group controlId="navbarBrand">
              <Form.Label>Navbar Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Brand Name"
                value={newNavbarBrand}
                onChange={(e) => setNewNavbarBrand(e.target.value)}
              />
            </Form.Group>

            <Button className="mt-3" variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Form>
        </Col>
      </Container>
    </Container>
  );
}

export default SettingsScreen;
