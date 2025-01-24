import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Img1 from "../assets/img/CS50P.png";
import Img2 from "../assets/img/udemy.png";
import Img3 from "../assets/img/100days.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Courses = () => {

  const compProjects = [
    {
      title: "Introduction to Python Programming CS50P ",
      description: "edX, Harvard University",
      imgUrl: Img1,
    },
    {
      title: "Learning C++ Programming",
      description: "Udemy, Abdul Bari",
      imgUrl: Img2,
    },
  ];
  const onProjects = [
    {
      title: "100 days of code",
      description: "Udemy, Dr.Angela Yu",
      imgUrl: Img3,
    },
    
  ];


  return (
    <section className="project" id="courses">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Courses</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Completed Courses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Ongoing Courses</Nav.Link>
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
