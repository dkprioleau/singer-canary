import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { MdWarning } from "react-icons/md";

function ViewWorkoutProgram({ workout, editWorkout }) {
	const editSets = (e, index) => {
		editWorkout(e.target.value, index, "sets");
	};
	const editReps = (e, index) => {
		editWorkout(e.target.value, index, "reps");
	};
	const editWeigh = (e, index) => {
		editWorkout(e.target.value, index, "weigh");
	};
	const editTime = (e, index) => {
		editWorkout(e.target.value, index, "time");
	};

	return (
		<>
			<div>
				<h2>It is time to add exercises to your workout! </h2>
			</div>

			<Container className="exercises">
				{workout.length === 0 ? null : (
					<Row className="exerciseTitles">
						<Col xs={4}>Exercise</Col>
						<Col xs={2}>Sets</Col>
						<Col xs={2}>Reps</Col>
						<Col xs={2}>Weigh(lb)</Col>
						<Col xs={2}>Time(second)</Col>
					</Row>
				)}

				{workout.map((exercise, index) => {
					return (
						<Row key={index}>
							<Col xs={4}>{exercise.name}</Col>
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
						</Row>
					);
				})}
			</Container>
			{/* <ul>
					{workout.map((exercise, index) => {
						return <li key={index}>{exercise}</li>;
					})}
				</ul> */}

			<Button>Add Exercise</Button>
		</>
	);
}

export default ViewWorkoutProgram;
