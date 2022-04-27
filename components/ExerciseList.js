import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

export default function ExerciseList({ onAddToWorkout }) {
  const exampleExercise = {
    name: "e1",
    sets: 5,
    reps: 8,
    time: 10,
    weight: 15,
  };

  function handleAddToWorkout(event) {
    onAddToWorkout(exampleExercise);
  }

  const [exercises, setExercises] = useState([exampleExercise]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_EXERCISE_API,
      },
    };

    fetch("https://exercisedb.p.rapidapi.com/exercises", options)
      .then((response) => response.json())
      .then((response) => setExercises(response))
      // can only display in then because that is the only place where we have access to response
      .catch((err) => console.error(err));
  }, []);
  console.log(exercises);
  return (
    <>
      <div>{exercises.length}</div>
      {exercises.map((exercise) => {
        return <div key={exercise.id}>{exercise.name}</div>;

        // <Container>
        //   <h3>List of Exercises</h3>
        //   <Row>
        //     <Col>
        //       <ListGroup key={exercise.id}>
        //         <ListGroup.Item>{exercise.name}</ListGroup.Item>
        //       </ListGroup>
        //     </Col>
        //     <Col>
        //       {" "}
        //       <Button variant="primary" onClick={handleAddToWorkout}>Add to workout</Button>{" "}
        //     </Col>
        //   </Row>
        // </Container>
      })}
    </>
  );
}
