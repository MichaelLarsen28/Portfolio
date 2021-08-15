import React from "react";
import { withRouter } from "react-router-dom";
import {IconContext} from "react-icons";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import Resume from "../../../Assets/CV.pdf"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


import "./MenuBar.css";


// Using history in props for routing to different components
const MenuBar = (props) => {

  return (
    <React.Fragment>
    <div id="menubar-parent">
    <Navbar expand="lg">
      <Container className="menubar-container">
      <Navbar.Brand alt="HomePage" href="/">
      <h1> Michael Larsen </h1>
      <p>Undergraduate Software Engineer</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ms-auto">
        <Nav.Link href="mailto:michael.larsen@iinet.net.au">
          <IconContext.Provider value={{ className:"myReact-icons"}}>
          <MdEmail/>
          </IconContext.Provider>
        </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/michaellarsen28/" target="_blank">
            <IconContext.Provider value={{ className:"myReact-icons"}}>
            <AiFillLinkedin/>
            </IconContext.Provider>
           </Nav.Link>
          <Nav.Link href="https://github.com/MichaelLarsen28" target="_blank">
          <IconContext.Provider value={{ className:"myReact-icons"}}>
          <AiFillGithub/>
          </IconContext.Provider>
          </Nav.Link>
          <Nav.Link href={Resume} download="Michael_Larsen_CV">
            <button id="resume-button"> Resume </button>
          </Nav.Link>
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
