import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Statement.css";

// Using history in props for routing to different components
const Statement = (props) => {

  return (
    <React.Fragment>
    <div id="statement-parent">
    <Container fluid="md" id="statement-container">
      <Row>
        <Col>
          <h1><b>
          Hi, I'm Michael <span role="img" aria-label="Hand Wave">👋</span>
          </b>
          </h1>
          <p>
          I'm a design-minded undergraduate software engineer focused on approaching and solving problems in creative ways using agile decision-making methodologies.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
    </React.Fragment>
  );
};

export default Statement;
