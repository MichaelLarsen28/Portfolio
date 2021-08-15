import React from "react";
import { withRouter } from "react-router-dom";
import { Container } from "react-bootsrap";

import "./AboutMe.css";

// Using history in props for routing to different components
const AboutMe = (props) => {

  return (
    <React.Fragment>
    <Container className="ms-auto">
      <h1><b>
      Hi, I'm Michael
      </b>
      </h1>
      <textarea readOnly>
        I'm studying a Bachelor's of Software Engineering at The University of Technology Sydney
      </textarea>
    </Container>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AboutMe);
