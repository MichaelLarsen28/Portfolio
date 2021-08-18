import React from "react";
import { Container, Card } from "react-bootstrap";

import "./TeamCard.css";

// Using history in props for routing to different components
const TeamCard = (props) => {

  return (
    <React.Fragment>
    <div id="teamcard-parent">
      <Container fluid="md" id="teamcard-container">
        <Card>
          <Card.Body>Teamwork</Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default TeamCard;
