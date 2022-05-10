import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/Md";
import fire from "../config/fire-config";


function ViewWorkoutProgram({ exercises, setExercises, editExercises, deleteExercise,workoutFirestoreID }) {

	//rendering existing data
	

	const editSets = (e, index) => {
		editExercises(e.target.value, index, "sets");
	};
	const editReps = (e, index) => {
		editExercises(e.target.value, index, "reps");
	};
	const editWeigh = (e, index) => {
		editExercises(e.target.value, index, "weigh");
	};
	const editTime = (e, index) => {
		editExercises(e.target.value, index, "time");
	};



	

	return (
		<>
			<Container className="exercises">
				{exercises.length === 0 ? null : (
					<Row className="exerciseTitles">
						<Col xs={3}>Exercise</Col>
						<Col xs={2}>Sets</Col>
						<Col xs={2}>Reps</Col>
						<Col xs={2}>Weigh(lb)</Col>
						<Col xs={2}>Time(second)</Col>
					</Row>
				)}

				{exercises.map((exercise, index) => {
					return (
						<Row key={index}>
							<Col xs={3}>{exercise.name}</Col>
							<Col xs={2}>
								<Form.Group>
									<Form.Control
										onChange={(e) => editSets(e, index)}
										type="number"
										placeholder="0"
									/>
								</Form.Group>
							</Col>
							<Col xs={2}>
								<Form.Group>
									<Form.Control
										onChange={(e) => editReps(e, index)}
										type="number"
										placeholder="0"
									/>
								</Form.Group>
							</Col>
							<Col xs={2}>
								<Form.Group>
									<Form.Control
										onChange={(e) => editWeigh(e, index)}
										type="number"
										placeholder="0"
									/>
								</Form.Group>
							</Col>
							<Col xs={2}>
								<Form.Group>
									<Form.Control
										onChange={(e) => editTime(e, index)}
										type="number"
										placeholder="0"
									/>
								</Form.Group>
							</Col>
							<Col xs={1}>
								<Button
									onClick={() => {
										deleteExercise(index);
									}}
									variant="warning"
								>
									<MdDelete title="delete" />
								</Button>{" "}
							</Col>
						</Row>
					);
				})}
			</Container>
		</>
	);
}

export default ViewWorkoutProgram;
