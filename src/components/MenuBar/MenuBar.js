import React, { useState, useEffect } from "react";
import {IconContext} from "react-icons";
import {Navbar, Nav, Container} from "react-bootstrap";
import Resume from "../../Assets/CV2.pdf"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';
import BgImage from "../../Assets/background.jpg"
import "./MenuBar.css";

function MenuBar() {

  return (
    <React.Fragment>
    <div className="menubar-parent">
    <Navbar expand="lg" variant="dark">
      <Container className="menubar-container">
      <Navbar.Brand alt="HomePage" href="/">
      <h1 className="navbarbrand-h1"
      > Michael Larsen </h1>
      <p className="navbarbrand-p"
      >Undergraduate Software Engineer</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ms-auto">
        <Nav.Link id="menubar-link-container">
          <Link className="menubar-link"
          to="Aboutme" smooth={true} offset={-90} duration={200}> About </Link>
        </Nav.Link>
        <Nav.Link id="menubar-link-container">
          <Link className="menubar-link"
          to="Academic" smooth={true} offset={-90} duration={200}> Academic </Link>
        </Nav.Link>
        <Nav.Link id="menubar-link-container">
          <Link className="menubar-link"
          to="Professional" smooth={true} offset={-90} duration={200}> Professional </Link>
        </Nav.Link>
        <Nav.Link id="menubar-link-container">
          <Link className="menubar-link"
          to="Teamwork" smooth={true} offset={-90} duration={200}> Teamwork </Link>
        </Nav.Link>
        <Nav.Link id="menubar-link-container">
          <Link className="menubar-link"
          to="Research" smooth={true} offset={-90} duration={200}> Research </Link>
        </Nav.Link>

          <Nav.Link href={Resume} download="Michael_Larsen_Resume">
            <button className="resume-button"
            > Resume </button>
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
