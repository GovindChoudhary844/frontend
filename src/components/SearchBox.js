import React, { useState } from "react";
import { Button, Form, Row, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${encodeURIComponent(keyword)}`);
    } else {
      navigate(navigate().location.pathname);
    }
  };

  return (
    <div>
      <style>
        {`
          /* Styles for medium screens (768px to 991px) */
          @media (min-width: 768px) and (max-width: 991px) {
            .text-area{
              width:50% !important;
            }
          }
        `}
      </style>
      <Form onSubmit={submitHandler}>
        <Row className="align-items-center">
          <InputGroup>
            <Form.Control
              type="text"
              name="q"
              placeholder="Search"
              onChange={(e) => setKeyword(e.target.value)}
              className="mr-2 text-area"
              style={{
                borderRadius: "1rem 0 0 1rem",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
            <Button
              type="submit"
              variant="outline-secondary"
              className="ml-0"
              style={{
                borderRadius: "0 2rem 2rem 0 ",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </InputGroup>
        </Row>
      </Form>
    </div>
  );
}

export default SearchBox;
