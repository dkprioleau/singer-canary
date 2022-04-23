import HamburgerMenu from "../components/HamburgerMenu";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import ExerciseList from "../components/ExerciseList";
import WorkoutProgram from "../components/WorkoutProgram";

export default function CreateWorkout() {
	const [workout,setWorkout] = useState([]);
	function newExercise(exercise){
	   console.log(exercise);
	   setWorkout([...workout, exercise])
	 } 

	 

	const onInput = (event) => {
		console.log(event.target.value);
	};

	return (
		<>
			<HamburgerMenu />
			<Container>
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Control
							type="email"
							placeholder="Name Workout"
							onChange={onInput}
						/>
					</Form.Group>
				</Form>
				<WorkoutProgram workout={workout}/>
				<ExerciseList onAddToWorkout={newExercise}/>
				<Button variant="warning">Cancel</Button>{" "}
				<Button href="/" variant="success">
					Save
				</Button>{" "}
			</Container>
		</>
	);
}
