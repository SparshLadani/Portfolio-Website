import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gitimage from "../../Assets/Projects/gitimage.png";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repositories = await axios.get("https://api.github.com/users/sparshladani/repos");
        setProjects(repositories.data);
      } catch (error) {
        console.error("Error fetching data from repository");
      }
    };
    fetchData();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card" style={{ marginBottom: "20px" }}>
              <ProjectCard
                imgPath={gitimage}
                isBlog={false}
                title={project.name}
                description={project.description}
                ghLink={project.html_url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
