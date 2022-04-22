import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

export default function ExerciseList(props) {//pass in exercise
  
  const exampleExercise = {
    name : "e1",
    sets : 5,
    reps : 8,
    time : 10,
    weight: 15
  }
  
  function handleAddToWorkout(event){
    props.onAddToWorkout(exampleExercise);
  }

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
            <Button variant="primary" onClick={handleAddToWorkout}>Add to workout</Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}
