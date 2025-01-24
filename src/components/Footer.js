import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer align-items-center" id="footer">
      <Container className="align-items-center">
      <Row className="align-items-center">
          <Col className="text-sm-start">
            <p>Email: madhumeeta2005om@gmail.com</p>
            <p>Phone: 9380659079</p>
          </Col>
          <Col className="text-sm-end">
            <div className="social-icon">
              <a href="www.linkedin.com/in/madhumeetaomprakash-9110232a5"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="https://github.com/madhumeeta27"><img src={navIcon2} alt="GitHub Icon" /></a>
              <a href="https://www.instagram.com/_madhumeeta_?utm_source=qr&igsh=bHI2ejJkdTA4ZXM="><img src={navIcon3} alt="Instagram Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
