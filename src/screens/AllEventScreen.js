// AllEventScreen.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Event from "../components/Event";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listEvents } from "../actions/eventActions";

function AllEventScreen() {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { error, loading, events } = eventList;

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <Container className="All-events-Screen">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : !events || events.length === 0 ? (
        <Message variant="info">No event decorations available.</Message>
      ) : (
        <div>
          <h1 className="text-center mt-lg-3">Event Decorations</h1>
          <Container>
            <Row>
              {events.map((event) => (
                <Col
                  key={event.id}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className="p-lg-2 p-md-2 p-1"
                >
                  <Event event={event} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </Container>
  );
}

export default AllEventScreen;
