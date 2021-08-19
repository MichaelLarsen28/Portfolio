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
        <Card.Title
        style={{marginLeft:'15px', marginTop:'15px', color: 'rgb(9,31,252)'}}>
        Professional Experiences and Projects</Card.Title>
          <Card.Body>
          <p><b>01.</b>&nbsp;Siemens Energy</p>

          <p>
          blah blah blah
          </p>

          <p><b>02.</b>&nbsp;OneWiFi Australia</p>

          <p>
          blah blah blah
          </p>

          </Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default ProfCard;
