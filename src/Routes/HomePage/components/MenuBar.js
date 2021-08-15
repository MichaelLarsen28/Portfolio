import React from "react";
import { withRouter } from "react-router-dom";
import {IconContext} from "react-icons";
import {Navbar, Nav, Container} from "react-bootstrap";
import Logo from "../../../Assets/Logo-5.png";
import Resume from "../../../Assets/CV.pdf"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


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
