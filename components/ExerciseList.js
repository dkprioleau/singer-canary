import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

export default function ExerciseList({ onAddToWorkout }) {
	const [exercises, setExercises] = useState([]);

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

	function handleAddToWorkout(exercise, index) {
		onAddToWorkout(exercise, index);
		console.log(exercise, index);
	}

	return (
		<>
			<Container>
				<h3>Exercise List</h3>
				{exercises.map((exercise, index) => {
					return (
						<Row key={exercise.id}>
							<Col>
								<ListGroup.Item>{exercise.name}</ListGroup.Item>
							</Col>
							<Col>
								<Button
									variant="primary"
									onClick={() => handleAddToWorkout(exercise.name, index)}
								>
									Add to workout
								</Button>{" "}
							</Col>
						</Row>
					);
				})}
			</Container>
		</>
	);

	// return (
	//   <>
	//       <Container>
	//         <h3>List of Exercises</h3>
	//         {exercises.map((exercise) =>

	//               <Row key={exercise.id}>
	//           <Col >
	//             <ListGroup>
	//               <ListGroup.Item>{exercise.name}</ListGroup.Item>
	//             </ListGroup>
	//           </Col>
	//           <Col>
	//             {" "}
	//             <Button variant="primary" onClick={handleAddToWorkout}>Add to workout</Button>{" "}
	//           </Col>
	//         </Row>
	//         }
	//        </Container>

	//   </>
	// );
}
