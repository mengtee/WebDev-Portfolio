import { Container, Row, Col, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/pic1.gif";
import projImg2 from "../assets/img/pic2.png";
import projImg3 from "../assets/img/project-img3.png";
import { Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Game Development",
      description: "Scala programming language",
      imgUrl: projImg1,
      url: "https://github.com/mengtee/GameDev-topdownshooterDS", // URL for the project
    },
    {
      title: "Web Development",
      description: "Property website ",
      imgUrl: projImg2,
      url: "https://github.com/mengtee/mestate.github.io", // URL for the project
    },
    {
      title: "Business startup",
      description: "Design and Development",
      imgUrl: projImg3,
    },
    {
      title: "Business startup",
      description: "Design and Development",
      imgUrl: projImg3,
    },
    {
      title: "Business startup",
      description: "Design and Development",
      imgUrl: projImg3,
    },
    {
      title: "Business startup",
      description: "Design and Development",
      imgUrl: projImg3,
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
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
