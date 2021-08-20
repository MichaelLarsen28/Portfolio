import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Statement.css";

// Using history in props for routing to different components
const Statement = (props) => {

  return (
    <React.Fragment>
    <div id="statement-parent">
    <Container fluid="md" id="statement-container">
          <div className="wrapper">
          <h1 className="typing-demo"><b>Hi, I'm Michael.</b></h1>
          </div>
          <p>
          I'm a design-minded undergraduate software engineer focused on
          approaching and solving <br />problemsin creative ways using agile
          decision-making methodologies.
          </p>
    </Container>
    </div>
    </React.Fragment>
  );
};

export default Statement;
