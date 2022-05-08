import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Styles from "../styles/success.module.css";

function success() {
	return (
		<div className={Styles.successMessage}>
			<Container>
				<h1>Your workout is successfully created!</h1>
				<Button variant="primary" href="/">
					Return to home page
				</Button>
			</Container>
		</div>
	);
}

export default success;
