import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./AboutMe.css";

// Using history in props for routing to different components
const AboutMe = (props) => {

  return (
    <React.Fragment>
    <div id="aboutme-parent">
    <Container fluid="md" id="aboutme-container">
      <Row>
        <Col>
          <h1><b>
          Hi, I'm Michael <span role="img" aria-label="Hand Wave">👋</span>
          </b>
          </h1>
          <p>
            I'm a final year Software Engineering student at The University of
            Technology Sydney. University has taught me how to approach
            and solve problems using agile decision-making metholodigies as well
            teaching me how to work effectively in a team environment. My
            internship experience at large, multi-industry and emerging companies,
            including Siemens and OneWiFi Australia, has provided me a platform
            to apply what i've learnt at University to real-world scenarios such as
            large-scale network and control system design, implementation and testing.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AboutMe);
