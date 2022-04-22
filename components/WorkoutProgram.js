import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { MdWarning } from "react-icons/md";

function WorkoutProgram() {
  const handleClick = () => {
    const exercisesDiv = document.querySelector(".exercises");
    const container = document.createElement("Container");
    container.innerHTML =
      "<Row><Col sm={4}>Exercise Name</Col> <Col sm={2}>Sets </Col>  <Col sm={2}>Reps</Col> <Col sm={2}>Time</Col> <Col sm={2}>Weight</Col></Row><br/>";
    exercisesDiv.appendChild(container);
  };

  return (
    <>
      <div>
        <h2>It is time to add exercises to your workout! </h2>
      </div>
      <div className="exercises"></div>
      <Button onClick={handleClick}>Add Exercise</Button>
    </>
  );
}

export default WorkoutProgram;
