import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import  Gamebar from "../../Assets/Projects/Gamebar.png";
import api from "../../Assets/Projects/api.jpg";
import spam from "../../Assets/Projects/spam.png";
import digits from "../../Assets/Projects/digits.png";
import search from "../../Assets/Projects/search.png";


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
              imgPath={Gamebar}
              isBlog={false}
              title="Game-Bar"
              description="Game Search engine built using React.js and Chakra css through which we can filter games based on their categories, score, ratings and their platform."
              ghLink="https://github.com/Krishaant003/game-hub"
              demoLink="https://game-hub-iota-ivory.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="Vidly"
              description="Vidly constitutes a Node.js-based backend API. Within this API, I've incorporated both authentication and authorization measures. Moreover, I've employed all available methods including GET, POST, PUT, and DELETE"
              ghLink="https://github.com/Krishaant003/Node.js-CRUD-operation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="Email Spam Classifier"
              description="A spam classifier model for emails was constructed utilizing the Random Forest algorithm along with the NLTK module, which facilitates the segregation and cleansing of words and text."
              ghLink="https://github.com/Krishaant003/Email-Spam-Classification"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digits}
              isBlog={false}
              title="Handwritten Digits Classifier"
              description="Developed an artificial neural network for the purpose of classifying handwritten digits. This model accepts images as input and performs the classification process."
              ghLink="https://github.com/Krishaant003/Basic-Image-Classifier-Tensorflow-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={search}
              isBlog={false}
              title="Object Classifier"
              description="Constructed a convolutional neural network designed for object classification. This model accepts input in the form of images."
              ghLink="https://github.com/Krishaant003/Multiclass-image-classification-using-tensorflow"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
