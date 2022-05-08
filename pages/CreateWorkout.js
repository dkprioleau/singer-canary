import HamburgerMenu from "../components/HamburgerMenu";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import ExerciseList from "../components/ExerciseList";
import ViewWorkoutProgram from "../components/ViewWorkoutProgram";
import fire from "../config/fire-config";

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
		console.log("before adding");
		fire
		.firestore()
		.collection("workout").add({
			exercises: [{
				id: "002",
				name: "push up",
				reps: 2,
				sets: 3,
				time: 3,
				weight:5
		}],
			id: 2000,
			name: "Example2"

		}).then(() => {
			console.log("Document successfully written!");
		})
		.catch((error) => {
			console.error("Error writing document: ", error);
		});
		console.log("after adding to firestore");
	};

	const onInput = (event) => {//workout has two objects, name(string), exercises(arrays)
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
