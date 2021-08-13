import React from "react";
import { withRouter } from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import Logo from "../../../Assets/Logo-4.png";
import Resume from "../../../Assets/CV.pdf"


import "./MenuBar.css";


// Using history in props for routing to different components
const MenuBar = (props) => {

  return (
    <React.Fragment>
    <div id="parent">
    <Navbar expand="lg">
      <Container>
      <Navbar.Brand alt="HomePage" href="/">
      <img
        alt=""
        src={Logo}
        width="200"
        height="auto"
        className="d-inline-block align-top"/>{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
          <Nav.Link href="mailto:michael.larsen@iinet.net.au">Email</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/michaellarsen28/" target="_blank">LinkedIn</Nav.Link>
          <Nav.Link href={Resume} download="Michael_Larsen_CV">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(MenuBar);
