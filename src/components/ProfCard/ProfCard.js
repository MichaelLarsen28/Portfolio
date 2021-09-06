import React from "react";
import { Card } from "react-bootstrap";

import "./ProfCard.css";

// Using history in props for routing to different components
const ProfCard = (props) => {

  return (
    <React.Fragment>
    <div id="profcard-parent">
        <Card>
          <Card.Body>
          <p><b>01.</b><a href="https://www.siemens-energy.com/global/en.html"
          target="_blank" rel="noreferrer">
          &nbsp;Siemens Energy</a></p>

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
          <p>
          The internship allowed me to demonstrate and develop multiple
          engineering competency standards set by <b style={{color: '#841584'}}>
          Engineers Australia. </b>
          This is proven through the indicators of attainment shown below:
          </p>
          <p>
            <ul>
              <li>Identified, assessed and managed risks during my time at the
              power station by engaging in daily safety briefings through
              ‘Take 5’ forms where we assess the immediate danger to ourselves
              and discuss ways to mitigate and eliminate these dangers.  I also
              applied and implemented the workplace health and safety
              requirements by adhering to the Lock Out Tag Out guidelines
              when working on any part of the plant.</li>
              <li>Built and maintained collaborative relationships with the
               customer, sub-contractors and team members and collaborated
               effectively within multi-disciplinary teams which included
               multiple trades, engineers, commercial and management.</li>
           </ul>
          </p>

          </Card.Body>
        </Card>
    </div>
    </React.Fragment>
  );
};

export default ProfCard;
