import React from "react";
import { Container, Card } from "react-bootstrap";

import "./LeadCard.css";

// Using history in props for routing to different components
const LeadCard = (props) => {

  return (
    <React.Fragment>
    <div id="leadcard-parent">
      <Container fluid="md" id="leadcard-container">
        <Card>
          <Card.Body>coming soon ...</Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default LeadCard;
