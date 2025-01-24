import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.jpg";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const compProjects = [
    {
      title: "Weather Monitoring System (July 2024) ",
      description: "IoT and Sensor-Based",
      imgUrl: projImg1,
      githubUrl: "#",
    },
    {
      title: "AR Physical Therapy Assistant (Oct 2024)",
      description: "Motion Tracking and user authentication",
      imgUrl: projImg2,
      githubUrl: "https://github.com/madhumeeta27/PhysioFit",
    },
    {
      title: "Astroverse (Apr 2024)",
      description: "Data Visualisation and APIs",
      imgUrl: projImg3,
      githubUrl: "https://github.com/code50/145886747/tree/main/project",
    },
    {
      title: " AI-Driven Ingredient Fraud Detection Tool (Oct 2024)",
      description: "NLP and TensorFLow",
      imgUrl: projImg4,
      githubUrl: "https://github.com/madhumeeta27/food-guard.git",
    },
    {
      title: "Flood Management System (Jan 2025)",
      description: "React,APIs and Firebase",
      imgUrl: projImg5,
      githubUrl: "https://github.com/namrata935/AquaAlert",
    },
  ];
  const onProjects = [
    {
      title: "Coding Platfrom progress",
      description: "React and APIs",
      imgUrl: projImg6,
      githubUrl: "https://github.com/your-repo/coding-platform-progress",
    },
    
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Completed Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Ongoing Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          compProjects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          onProjects.map((project, index) => {
                            return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
