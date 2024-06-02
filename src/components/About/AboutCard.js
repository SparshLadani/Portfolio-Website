import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sparsh Ladani </span>
            from <span className="purple"> Halifax, Canada.</span>
            <br />
            I am currently a third student at Dalhousie University persuing Bachelor's of Computer Science degree.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess and Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sparsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
