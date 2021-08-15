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
            I'm studying a Bachelor's of Software Engineering at The University of Technology Sydney
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
