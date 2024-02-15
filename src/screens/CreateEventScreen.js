// CreateEventScreen.js
import React, { useState, useRef } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../actions/eventActions";

const CreateEventScreen = () => {
  const dispatch = useDispatch();
  const eventCreate = useSelector((state) => state.eventCreate);

  const { success, loading, error } = eventCreate;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here if needed

    dispatch(createEvent(title, description, image));

    setTitle("");
    setDescription("");
    setImage(null);
    setShowAlert(true);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const editor = useRef(null);

  return (
    <Container>
      <Row className="mt-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Link to="/admin/eventlist" className="btn btn-light mb-3">
            Go Back
          </Link>
          <Card className="p-3">
            <h2 className="text-center mb-4">Create Event</h2>
            {showAlert && (
              <Alert
                variant={success ? "success" : "danger"}
                onClose={() => setShowAlert(false)}
                dismissible
              >
                {success
                  ? "Event created successfully!"
                  : `Error creating event: ${error}`}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formImage">
                <Form.Label>Event Image:</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Event"
                    className="mt-2 img-thumbnail"
                    style={{ maxWidth: "100%" }}
                  />
                )}
              </Form.Group>

              <Form.Group controlId="formTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Event Title"
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Description:</Form.Label>
                <JoditEditor
                  ref={editor}
                  value={description}
                  onChange={(content) => setDescription(content)}
                />
                <div
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </Form.Group>

              <Button className="mt-3" type="submit" variant="primary">
                Create Event
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEventScreen;
