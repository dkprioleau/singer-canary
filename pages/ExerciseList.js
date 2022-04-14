import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

export default function ExerciseList() {
  return (
    <> 
      <Container>
          <h3>List of Exercises</h3>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>Exercise Name</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            {" "}
            <Button variant="primary">Add to workout</Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}
