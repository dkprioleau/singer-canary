import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

export default function ExerciseList() { 

  // useEffect(()=>{ 
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  //       'X-RapidAPI-Key': process.env.NEXT_PUBLIC_EXERCISE_API,
  //     }
  //   };
    
  //   fetch('https://exercisedb.p.rapidapi.com/exercises', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // },[] )
 
  return (
    <> 
      <Container>
          <h3>List of Exercises</h3>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>Exercise Name</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            {" "}
            <Button variant="primary">Add to workout</Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}
