import React from "react";
import { Container, Card } from "react-bootstrap";

import "./ProfCard2.css";

// Using history in props for routing to different components
const ProfCard2 = (props) => {

  return (
    <React.Fragment>
    <div id="profcard2-parent">
      <Container fluid="md" id="profcard2-container">
        <Card>
          <Card.Body>
          <p><b>01.</b><a href="https://www.onewifi.com.au/"
          target="_blank" rel="noreferrer">
          &nbsp;OneWiFi</a></p>

          <p>
          When I started my internship at OneWiFi they were emerging into the
          Smart City space, providing IOT (internet of things) solutions to
          councils and cities using different types of connected sensors and
          applications to collect data to manage assets and resources efficiently.
          During the six months I did a variety of different work including
          tendering, onsite and remote troubleshooting, business development,
          service operations, project management and scheduling activities.
          </p>

          <p>
          A key development phase during my internship was
        <b style={{color: '#841584', fontWeight: '600'
        }}> tendering and winning </b>
          The Broken Hill City Council Smart Lighting project. The project was
          to implement Smart Renewable light poles and CCTV throughout the
          specific sites in Broken Hill.  The project allowed me to develop
          on my Engineers Australia elements of competence specifically
          identifying the economic, social and environmental impacts of
          engineering activities.  I did this by presenting the customer
          with an off-grid solution that would replace the existing
          lighting with a wind and solar powered light solution.  I
          understood the outright economic cost of a renewable solution
          like this but pushed it forward as I believed it would be
          beneficial to the local economy, environment and community in
          the future.
          </p>
          <p>
          <a 
          href="https://www.brokenhill.nsw.gov.au/News-articles/Green-light-for-CCTV-and-smart-lighting"
          target="_blank" rel="noreferrer">
          The project details can be found here. </a>
          </p>

          </Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default ProfCard2;
