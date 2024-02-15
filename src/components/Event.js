// Event.js
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <Card className="mb-4">
      <Link to={`/events/${event.id}`}>
        {event.image && (
          <Card.Img
            variant="top"
            src={event.image}
            alt={`Event  ${event.id}`}
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        )}
      </Link>
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: event.description }} />
      </Card.Body>
    </Card>
  );
};

export default Event;
