import React, { useState, useEffect } from 'react';
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";
import { Container, Row, Col} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import SelfPortrait from "../Assets/SelfPortrait2.png"
import "./AboutMe.css";

function AboutMe() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <div id='Aboutme' className="aboutme-container">
    <Fade bottom>
      <div className="title-container">
        <h1><span class="title">About Me</span></h1>
      </div>
    </Fade>
    <Fade bottom>
        <Container>
          <Row>
            <Col md={4} sm={12} xs={12}
             className="imageContainer">
              <img
                className="d-block"
                src={SelfPortrait}
                alt="Hey it's me!"
              />
            </Col>
            <Col md={8} sm={12} xs={12}>
              <AboutMeCard />
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}

export default AboutMe;
