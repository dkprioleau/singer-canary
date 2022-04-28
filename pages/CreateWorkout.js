import HamburgerMenu from "../components/HamburgerMenu";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import ExerciseList from "../components/ExerciseList";
import ViewWorkoutProgram from "../components/ViewWorkoutProgram";

export default function CreateWorkout() {
	const [workout, setWorkout] = useState([]);
	function newExercise(exercise) {
		console.log(exercise);
		setWorkout([...workout, exercise]);
	}

	const editWorkout = (value, index, property) => {
		workout[index][property] = value;
		setWorkout([...workout]);
	};

	const save = () => {
		console.log(workout);
	};

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
				<ViewWorkoutProgram workout={workout} editWorkout={editWorkout} />
				<ExerciseList onAddToWorkout={newExercise} />
				<Button variant="warning">Cancel</Button>{" "}
				<Button variant="success" onClick={save}>
					Save
				</Button>{" "}
			</Container>
		</>
	);
}
