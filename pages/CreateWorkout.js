import HamburgerMenu from "../components/HamburgerMenu";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import ExerciseList from "./ExerciseList";

export default function CreateWorkout() { 
  
  const [Workout,setWorkout] = useState([]);

  
  const onInput = (event) =>{
    console.log(event.target.value)
  }

  function newExercise(exercise){
    console.log(exercise);
  }

  return (
    <>
      <HamburgerMenu />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Name Workout" onChange={onInput} />
        </Form.Group>
      </Form>
      <ExerciseList onAddToWorkout={newExercise} />
      <Button variant="warning">Cancel</Button>{" "}
      <Button href="/" variant="success">
        Save
      </Button>{" "}
    </>
  );
}
