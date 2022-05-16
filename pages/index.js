import { useState, useEffect } from "react";
import Head from "next/head";
import fire from "../config/fire-config";
import HamburgerMenu from "../components/HamburgerMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { GrEdit } from "react-icons/Gr";
import { MdDelete } from "react-icons/Md";
import { useRouter } from "next/router";
import Link from 'next/link';
import Styles from "../styles/home.module.css";

const Home = () => {
  const router = useRouter();

  const [workouts, setWorkouts] = useState([]);

  const deleteWorkout = (index) => {
    workouts.splice(index, 1);
    setWorkouts([...workouts]);
  };

  useEffect(() => {
    fire
      .firestore()
      .collection("workout")
      .onSnapshot((snap) => {
        const workouts = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setWorkouts([...workouts]);
      });
  }, []);

  return (
    <div>
      <HamburgerMenu />
      <Head>
        <title>Fitness App</title>
      </Head>
      <Container className={Styles.mainContainer}>
        <h1 className={Styles.mainHeader}>List of Workout Programs</h1>
        {workouts.map((item, index) => (
          <Container key={item.name} className={Styles.workoutContainer}>
            {/* creating container for every item (object) */}
            <Row>
              <Col xs={9}>
                <h4>{item.name}</h4>
              </Col>
              <Col xs={1}>
                <Button variant="primary">
                  <FaPlay title="play" />
                </Button>{" "}
              </Col>
              <Col xs={1}>
				 <Button> 
                <Link
                  variant="secondary"
                  
                  href={{
                    pathname: "/EditWorkout",
                    query: { firebaseId: item.id },
                  }}>
                {/* we are using link because we are passing firebase id */}
                  <GrEdit title="edit" />
                </Link>{" "}
				</Button>
              </Col>
              <Col xs={1}>
                <Button
                  variant="warning"
                  onClick={(index) => deleteWorkout(index)}
                >
                  <MdDelete title="delete" />
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        ))}
        <Container>
          <Button
            className={Styles.btn}
            variant="primary"
            href="/CreateWorkout"
          >
            New Workout
          </Button>{" "}
          {/*First few items of the List of Workout History*/}
          {/*View All Workout History Button which directs to the WorkoutHistory page*/}
          <Button className={Styles.btn} href="/WorkoutHistory">
            View All
          </Button>
        </Container>
      </Container>
    </div>
  );
};
export default Home;

// Things from blog app
// const [blogs, setBlogs] = useState([]);
// 	// array will be filled with blog entries
// 	const [notification, setNotification] = useState("");
// 	const [loggedIn, setLoggedIn] = useState(false);

// 	fire.auth().onAuthStateChanged((user) => {
// 		if (user) {
// 			setLoggedIn(true);
// 		} else {
// 			setLoggedIn(false);
// 		}
// 	});

// const handleLogout = () => {
//   fire
//     .auth()
//     .signOut()
//     .then(() => {
//       setNotification("Logged out");
//       setTimeout(() => {
//         setNotification("");
//       }, 2000);
//     });
// };

// {notification}
// 				{!loggedIn ? (
// 					<div>
// 						<Link href="/users/register">
// 							<a>Register</a>
// 						</Link>{" "}
// 						|
// 						<Link href="/users/login">
// 							<a> Login</a>
// 						</Link>
// 					</div>
// 				) : (
// 					<button onClick={handleLogout}>Logout</button>
// 				)}
// 				{/* small menu if not user or logged out
//       if we are logged in logout button will display*/}
// 				<ul>
// 					{blogs.map((blog) => (
// 						<li key={blog.id}>
// 							<Link href="/blog/[id]" as={"/blog/" + blog.id}>
// 								<a itemProp="hello">{blog.title}</a>
// 							</Link>
// 						</li>
// 					))}
// 				</ul>
// 				{/* all the blogs are stored in the blog variable
//       we are mapping over them and now showing them in an unordered list
//       by inporting link  we are creating a dynamic url from the index page for each blog entry*/}
// 				{loggedIn && <CreatePost />}
