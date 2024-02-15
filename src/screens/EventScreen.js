// EventScreen.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Container, Image, ListGroup } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listEventDetails } from "../actions/eventActions";

function EventScreen() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const eventDetails = useSelector((state) => state.eventDetails);
  const { loading, error, event } = eventDetails;

  useEffect(() => {
    dispatch(listEventDetails(id));
  }, [dispatch, id]);

  if (!event) {
    return <Message variant="danger">Event not found</Message>;
  }

  return (
    <Container>
      <Link to="/events" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            <Col md={6}>
              {event.image && (
                <Image
                  className="rounded"
                  src={event.image}
                  alt={`Event  ${event.id}`}
                  fluid
                />
              )}
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>{event?.title}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    Description:
                    <span
                      dangerouslySetInnerHTML={{ __html: event?.description }}
                    ></span>
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}

export default EventScreen;
