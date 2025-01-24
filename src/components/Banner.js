import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/my-photo.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Madhumeeta Omprakash`} </h1>
                  <p class="desc"> A Computer Science Engineering student at RV College of Engineering (RVCE) since 2023, passionate about
 problem-solving and continuous learning. Proficient in Python and C++, I aim to enhance my technical skills
 and stay updated with emerging technologies. A collaborative and goal-driven individual, eager to contribute
 to both academics and extracurricular activities.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"className="circular-img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
