import HamburgerMenu from "../components/HamburgerMenu";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import ExerciseList from "../components/ExerciseList";


export default function CreateWorkout() { 
  const onInput = (event) =>{
    console.log(event.target.value)
  } 

  return (
    <>
      <HamburgerMenu />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Name Workout" onChange={onInput} />
        </Form.Group>
      </Form>
      <ExerciseList />
      <Button variant="warning">Cancel</Button>{" "}
      <Button href="/" variant="success">
        Save
      </Button>{" "}
    </>
  );
}
