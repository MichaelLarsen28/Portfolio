import React, { useState, useEffect } from "react";
import {IconContext} from "react-icons";
import {Navbar, Nav, Container} from "react-bootstrap";
import Resume from "../../Assets/CV2.pdf"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';
import "./MenuBar.css";

function MenuBar() {
  const [menubar, setMenubar] = useState(false);


const changeBackground = () => {
  if(window.scrollY >= 20) {
    setMenubar(true)
  } else{
    setMenubar(false)
  }
};

window.addEventListener('scroll', changeBackground)

  return (
    <React.Fragment>
    <div className={menubar ? 'menubar-parent active' : 'menubar-parent'}>
    <Navbar expand="lg" variant="dark">
      <Container className="menubar-container">
      <Navbar.Brand alt="HomePage" href="/">
      <h1> Michael Larsen </h1>
      <p>Undergraduate Software Engineer</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ms-auto">
        <Nav.Link id="menubar-link-container">
          <Link id="menubar-link" to="Academic" spy={true} smooth={true} offset={50} duration={200}> Academic </Link>
        </Nav.Link>
        <Nav.Link id="menubar-link-container">
          <Link id="menubar-link" to="Professional" spy={true} smooth={true} offset={50} duration={200}> Professional </Link>
        </Nav.Link>
        <Nav.Link id="menubar-link-container">
          <Link id="menubar-link" to="Teamwork" spy={true} smooth={true} offset={50} duration={200}> Teamwork & Service </Link>
        </Nav.Link>
        <Nav.Link id="menubar-link-container">
          <Link id="menubar-link" to="Leadership" spy={true} smooth={true} offset={50} duration={200}> Leadership </Link>
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
}

export default MenuBar;
