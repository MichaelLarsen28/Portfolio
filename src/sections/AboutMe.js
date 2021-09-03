import React from 'react';
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";
import { Container, Row, Col} from "react-bootstrap";
import SelfPortrait from "../Assets/SelfPortrait6.png"
import "./AboutMe.css";

export default function Body() {
  return (
    <div id='Aboutme' className="aboutme-container">
      <div className="title-container">
        <h1><span class="title">About Me</span></h1>
      </div>
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
    </div>
  );
}
