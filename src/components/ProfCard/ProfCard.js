import React from "react";
import { Container, Card } from "react-bootstrap";

import "./ProfCard.css";

// Using history in props for routing to different components
const ProfCard = (props) => {

  return (
    <React.Fragment>
    <div id="profcard-parent">
      <Container fluid="md" id="profcard-container">
        <Card>
          <Card.Body>Professional Experiences and Projects</Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default ProfCard;
