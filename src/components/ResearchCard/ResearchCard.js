import React from "react";
import { Container, Card } from "react-bootstrap";

import "./ResearchCard.css";

// Using history in props for routing to different components
const ResearchCard = (props) => {

  return (
    <React.Fragment>
    <div id="researchcard-parent">
      <Container fluid="md" id="researchcard-container">
        <Card>
          <Card.Body>coming soon ...</Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default ResearchCard;
