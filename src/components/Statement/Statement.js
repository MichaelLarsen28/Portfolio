import React from "react";
import { Container } from "react-bootstrap";
import "./Statement.css";

// Using history in props for routing to different components
const Statement = (props) => {

  return (
    <React.Fragment>
    <div id="statement-parent">
    <Container fluid="md" id="statement-container">
          <div className="typing-container">
              <h1> Hi I'm Michael. </h1>
          </div>
          <p>
          I'm a design-minded undergraduate software engineer focused on
          approaching and solving <br/> problems in creative ways using agile
          decision-making methodologies.
          </p>
    </Container>
    </div>
    </React.Fragment>
  );
};

export default Statement;
