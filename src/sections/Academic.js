import React from 'react';
import AcademicCard from "../components/AcademicCard/AcademicCard";
import AcademicCarousel from "../components/AcademicCarousel/AcademicCarousel";
import AcademicCard2 from "../components/AcademicCard2/AcademicCard2";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./Academic.css";

export default function Body() {
  return (
    <div id='Academic' className="academic-container">
    <Fade bottom>
      <div className="title-container">
        <h1><span class="title">Academic Experiences and Projects</span></h1>
      </div>
    </Fade>
    <Fade bottom>
          <Container>
            <Row>
              <Col md={6} sm={12} xs={12}>
                <AcademicCard />
              </Col>
              <Col md={6} sm={12} xs={12}>
                <AcademicCarousel />
              </Col>
            </Row>
            <Row>
                <AcademicCard2 />
            </Row>
          </Container>
     </Fade>
    </div>
  );
}
