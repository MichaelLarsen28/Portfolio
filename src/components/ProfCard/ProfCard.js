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
          Most of my internship at Siemens Energy was spent at a power station
          where I was a part of the commissioning team.  The team was responsible
          for testing signals for the newly upgraded distributed control system.
          My primary role was desk technician where I made sure that signals,
          alarms, and faults on the HMI (human-machine interface) displayed
          correctly when triggered by a field technician.  I also helped the
          network engineering team set-up and test the multiple servers and
          clients to allow the control system to receive field data.  I moved
          into the return to service team when the commissioning team completed
          all signal tests.  This is where I communicated regularly with the
          customer and participated in multiple meetings to get the plant
          running with the new control system.
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
