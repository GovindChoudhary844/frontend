// EventListScreen.js
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../actions/eventActions";

function EventListScreen() {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.eventList);

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <div>
      <Row className="align-item-center">
        <Col>
          <h1>Event-Decoration List</h1>
          <Link to="/create-event">
            <Button className="my-lg-3 my-md-3" size="sm">
              <i className="fas fa-plus"></i>Create Event
            </Button>
          </Link>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>
                      {event.image && (
                        <img
                          src={event.image}
                          alt={`Event ${event.id}`}
                          style={{ maxHeight: "50px", maxWidth: "50px" }}
                        />
                      )}
                    </td>
                    <td>{event.title}</td>
                    <td>
                      <span
                        dangerouslySetInnerHTML={{ __html: event?.description }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default EventListScreen;
