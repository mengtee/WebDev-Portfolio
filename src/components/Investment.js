import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../assets/img/ipic1.png";
import pic2 from "../assets/img/ipic2.png";
import pic3 from "../assets/img/ipic3.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Investments = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="investment">
      <Container>
        <Row>
          {/* First Column - Title and Description */}
          <Col md={6}>
            <div className="text-column">
              <h2>Other Interest</h2>
              <p>
                In addition to my passion for technology, I am also interested
                in financial instruments such as stocks, options, and
                cryptocurrencies. By combining my programming knowledge with an
                understanding of these financial instruments, I am eager to
                explore opportunities in quantitative analysis and algorithmic
                trading.
              </p>
            </div>
          </Col>

          {/* Second Column - Carousel with Images */}
          <Col md={6}>
            <div className="carousel-column">
              <Carousel
                responsive={responsive}
                infinite={true}
                className="image-carousel"
              >
                <div className="item">
                  <img src={pic1} alt="Image 1" />
                </div>
                <div className="item">
                  <img src={pic2} alt="Image 2" />
                </div>
                <div className="item">
                  <img src={pic3} alt="Image 3" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
