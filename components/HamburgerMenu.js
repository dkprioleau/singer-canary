import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Navbar,
	Container,
	Offcanvas,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";

export default function HamburgerMenu() {
	return (
		<Navbar bg="light" expand={false}>
			<Container fluid>
				<Navbar.Brand href="#">#1 Fitness App</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar" />
				<Navbar.Offcanvas
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/CreateWorkout">Add program</Nav.Link>
							<Nav.Link href="/WorkoutHistory">View history</Nav.Link>
							<Nav.Link href="/users/login">Logout</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}
