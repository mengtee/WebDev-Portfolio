import { Container, Row, Col, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/pic1.gif";
import projImg2 from "../assets/img/pic2.png";
import projImg3 from "../assets/img/pic3.png";
import projImg4 from "../assets/img/pic4.png";
import projImg5 from "../assets/img/pic5.png";
import projImg6 from "../assets/img/pic6.png";
import projImg7 from "../assets/img/pic7.png";

import { Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Game Development",
      description:
        "Top Down Shooter game using Scala programming language and OOP concepts",
      imgUrl: projImg1,
      url: "https://github.com/mengtee/GameDev-topdownshooterDS", // URL for the project
    },
    {
      title: "Web Development",
      description:
        "Build a property website for listing properties using HTML, CSS, JavaScript, and PHP.",
      imgUrl: projImg2,
      url: "https://github.com/mengtee/mestate.github.io", // URL for the project
    },
  ];
  const projects2 = [
    {
      title: "BFM 89.9 Podcast RAG System",
      description:
        "Build a RAG (Retrieval-Augmented Generation) answering system based on a previous podcast using LlamaIndex, Llama 3, MongoDB, and FastAPI.",
      imgUrl: projImg3,
      url: "https://github.com/mengtee/LlamaIndexMongoDB", // URL for the project
    },
    {
      title: "Financial Report RAG System",
      description:
        "RAG system that summarize the financial report of a company, including the Balance Sheet, Statement of Cash Flows, and Income Statement. ",
      imgUrl: projImg4,
      url: "https://github.com/mengtee/AdvanceRAG", // URL for the project
    },
    {
      title: "Brain Tumor Classification using CNN",
      description:
        "Train a CNN for brain tumor classification using images, with TensorFlow, Keras, and Matplotlib.",
      imgUrl: projImg5,
      url: "https://github.com/mengtee/BrainTumor-MachineLearning-CNN", // URL for the project
    },
    {
      title: "Haar Cascade face detection",
      description:
        "Utilizes OpenCV to process video frames, applying various computer vision techniques on video processing",
      imgUrl: projImg6,
      url: "https://github.com/mengtee/Digital-Image-Processing", // URL for the project
    },
  ];
  const projects3 = [
    {
      title: "Driving optimisation of autonomous vehicles with route sharing",
      description:
        "Use the Greedy Heuristic method to find the optimal time for vehicles to pass through an intersection using Intersection Cooperative Adaptive Cruise Control (ICACC).",
      imgUrl: projImg7,
      url: "https://github.com/mengtee/SpeedAdjustmentAlgorithms", // URL for the project
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A diverse portfolio of projects focused on Machine Learning,
                    Artificial Intelligence, and full-stack web development.
                    These projects showcase a deep understanding of advanced
                    algorithms, innovative solutions, and practical applications
                    in real-world scenarios.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web and Game Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Artificial Intelligence and Machine Learning
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Final Year Project</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
