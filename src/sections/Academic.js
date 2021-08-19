import React from 'react';
import AcademicCard from "../components/AcademicCard/AcademicCard";
import AcademicCarousel from "../components/AcademicCarousel/AcademicCarousel";
import { Container, Row, Col } from "react-bootstrap";
import "./Academic.css";

export default function Body() {
  return (
    <div id='Academic' className="academic-container">
          <Container>
            <Row>
              <Col md={6} sm={12} xs={12}>
                <AcademicCard />
              </Col>
              <Col md={6} sm={12} xs={12}>
                <AcademicCarousel />
              </Col>
            </Row>
          </Container>
    </div>
  );
}
