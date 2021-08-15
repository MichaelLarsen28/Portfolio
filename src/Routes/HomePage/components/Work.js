import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

import "./Work.css";

// Using history in props for routing to different components
const Work = (props) => {

  return (
    <React.Fragment>
    <div id="work-parent">
      <Container fluid="md" id="work-container">
        <Card>
          <Card.Body>Professional Experiences and Projects</Card.Body>
        </Card>
        <Card>
          <Card.Body>Academic Experiences and Projects</Card.Body>
        </Card>
        <Card>
          <Card.Body>Teamwork and Service</Card.Body>
        </Card>
        <Card>
          <Card.Body>Leadership</Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(Work);
