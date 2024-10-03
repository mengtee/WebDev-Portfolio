import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web developer", "AI Engineer", "ML Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2>
                    {`Hi there! My name is Meng Kiat `} <br />
                  </h2>
                  <h1>
                    <span className="wrap">{text}</span>
                    <span className="cursor">|</span>
                  </h1>
                  <p>
                    Passionate Computer Science undergraduate with hands-on
                    experience in Artificial Intelligence and web development.
                    Eager to seek industry opportunities that involve solving
                    complex problems and continuously improving technical
                    skills. Looking for technical roles where I can apply my
                    knowledge to impactful projects in a collaborative
                    environment.
                  </p>
                  <button
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/tee-meng-kiat-5589471b7/",
                        "_blank"
                      );
                    }}
                  >
                    Let's connect
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
