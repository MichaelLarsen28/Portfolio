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
          <p>
          When I wasn’t on site, I was building an energy output dashboard for
          the Siemens Energy Sydney office.   The premise of the dashboard was
          to display the energy output of Asia-Pacific power stations that use
          the Siemens Energy distributed control system.  The technology I used
           included Python, specifically pandas and NumPy libraries for web
           scraping and data manipulation.  I also used JavaScript, CSS and an
           open-source JavaScript library called Leaflet to display an
          interactive map. 
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
