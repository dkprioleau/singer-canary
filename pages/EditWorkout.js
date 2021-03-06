import HamburgerMenu from "../components/HamburgerMenu";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import ExerciseList from "../components/ExerciseList";
import ViewWorkoutProgram from "../components/ViewWorkoutProgram";
import fire from "../config/fire-config";
import { useRouter } from "next/router";
import Styles from "../styles/createWorkout.module.css";

export default function CreateWorkout() {
	const router = useRouter();
	const [exercises, setExercises] = useState([]);
	const [workoutName, setWorkoutName] = useState("");
	const [isClicked, setIsClicked] = useState(false);
	const [workoutFirestoreID, setWorkoutFirestoreID] = useState(""); 


	useEffect(()=>{ 
		
		if(router.isReady){
		console.log(router.query)
        setWorkoutFirestoreID(router.query.firebaseId);
	}
	
	},[router.isReady])
// we need to use router because we are passing the firebaseId
	

	useEffect(() => {
		if(workoutFirestoreID!=""){
			console.log(exercises)
			console.log(workoutFirestoreID)
			fire
			.firestore()
			.collection("workout").doc(workoutFirestoreID)
			.get().then((doc) => {
				console.log(doc.data());
				setExercises(doc.data()['exercises'])
				setWorkoutName(doc.data()['name'])
			});
		}
	}, [workoutFirestoreID]);
	//fetching exercises from firestore  



	function newExercise(exercise) {
		console.log(exercise);
		setExercises([...exercises, exercise]);
	}

	const editExercises = (value, index, property) => {
		const newExercises = [...exercises]
		newExercises[index][property] = value;
		// exercises[index][property] = value;
		console.log(exercises[index])
		setExercises(newExercises);
		console.log(exercises)
	};

	const deleteExercise = (index) => {
		exercises.splice(index, 1);
		setExercises([...exercises]);
	};

	// const [workout, setWorkout] = useState([exercises]);
	const save = () => {
		console.log(exercises);
		
		//create a new workout: doesn't have workoutFirestoreID
		if(workoutFirestoreID==""){
		
			//create a new document 
			fire
				.firestore()
				.collection("workout")
				.add({
					name: workoutName,
					exercises: exercises
				}
				)
				.then((docRef) => {
					console.log("Document successfully written with ID:", docRef.id);
					setWorkoutFirestoreID(docRef.id);
					// localStorage.setItem("workout",JSON.stringify(exercises))
					// console.log(localStorage)
					// exercises are saved to localstorage under workout key 
				})
				.catch((error) => {
					console.error("Error writing document: ", error);
				});
				
				
					//editing the existing workout
		}else{
				
				// function updateWorkout(workout){
				// 	setWorkout([...workout,workout])
				// }
				fire
				.firestore()
				.collection("workout")
				.doc(workoutFirestoreID).update(
					{
						name: workoutName,
						exercises: exercises
				
					}
					
				);
				
		}
	};
	

	return (
		<>
			<HamburgerMenu />
			<Container>
				<div>
					<h3 className={Styles.subHeading}>
						Step 1: Name your workout program{" "}
					</h3>
				</div>
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Control
							type="email"
							placeholder="workout name"
							onChange={(e) => setWorkoutName(e.target.value)}
							value={workoutName}
						/>
					</Form.Group>
				</Form> 
				<div>
					<h3 className={Styles.subHeading}>
						Step 2: Add exercises to your workout and edit details!{" "}
					</h3>
				</div>
				<ViewWorkoutProgram
					exercises={exercises}
					editExercises={editExercises}
					deleteExercise={deleteExercise}
					workoutFirestoreID = {workoutFirestoreID}
					
				/>
				<Button className={Styles.btn} onClick={() => setIsClicked(!isClicked)}>
					{isClicked ? "Hide Exercises" : "Add Exercises"}
				</Button>
				{isClicked && (
					<>
						<ExerciseList onAddToWorkout={newExercise} />
						<div>
							<h3 className={Styles.subHeading}>Step 3: Save and enjoy!</h3>
						</div>
						<Button
							className={Styles.btn}
							//href="/success"
							variant="success"
							onClick={save}
						>
							Save
						</Button>
						<Button className={Styles.btn} variant="warning">
							Cancel
						</Button>
					</>
				)}
			</Container>
		</>
	);
}