import React from 'react';
import ProfCard from "../components/ProfCard/ProfCard";
import ProfCard2 from "../components/ProfCard2/ProfCard2";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import "./Professional.css";

export default function Body() {
  return (
    <div id='Professional' className="professional-container">
    <Fade bottom>
      <Container>
        <Row>
          <div className="title-container">
            <h1><span class="title">Professional Experiences and Projects</span></h1>
          </div>
        </Row>
      </Container>
    </Fade>
    <Fade bottom>
      <Container>
        <Row>
            <ProfCard />
        </Row>
        <Row>
            <ProfCard2 />
        </Row>
      </Container>
    </Fade>
    </div>
  );
}
