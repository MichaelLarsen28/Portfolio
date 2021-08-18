import React from "react";
import { Container, Card } from "react-bootstrap";

import "./AcademicCard.css";

// Using history in props for routing to different components
const AcademicCard = (props) => {

  return (
    <React.Fragment>
    <div id="academiccard-parent">
      <Container fluid="md" id="academiccard-container">
        <Card>
          <Card.Body>Academic Experiences and Projects</Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default AcademicCard;
