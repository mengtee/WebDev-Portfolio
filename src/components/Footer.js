import logo from "../assets/img/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="">
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/tee-meng-kiat-5589471b7/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/mengtee" target="_blank">
                <img src={navIcon4} alt="" />
              </a>
              <a href="https://www.instagram.com/mengtee_/" target="_blank">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved. Meng Kiat</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
