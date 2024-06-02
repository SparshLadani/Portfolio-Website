import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sample from "../../Assets/Projects/sample movie.png";
import events from "../../Assets/Projects/image.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={events}
              isBlog={false}
              title="Event Mangement System"
              description="Organize personal events, post your event and invite new people to the event by providing the description of the event. This web application was made using php and also uses login and signup process for a user in order to post events."
              ghLink="https://github.com/SparshLadani/Event-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample}
              isBlog={false}
              title="Movie Reviews"
              description="Build a movie review web application like imdb that allows a user to login and then post a review for more than 20 thousand movies. This project is build using modern day technologies like MongoDB, ExpressJS, ReactJS and NodeJS. Furthermore, the sample data in this project is retrieved from MongoDB Atlas."
              ghLink="https://github.com/SparshLadani/Mern-Movie-Reviews"
              demoLink="https://movie-reviews-app.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
