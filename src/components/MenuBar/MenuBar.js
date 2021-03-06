import React, { useState } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import Resume from "../../Assets/CV2.pdf"
import { Link } from 'react-scroll';
import "./MenuBar.css";

function MenuBar() {
  const [menubar, setMenubar] = useState(false);


const changeBackground = () => {
  if(window.scrollY >= 15) {
    setMenubar(true)
  } else{
    setMenubar(false)
  }
};


window.addEventListener('scroll', changeBackground)

  return (
    <React.Fragment>
    <div className={menubar ? 'menubar-parent active' : 'menubar-parent'}>
    <Navbar expand="lg" variant='light'>
      <Container className="menubar-container">
      <Navbar.Brand alt="HomePage" href="/">
      <h1 className={menubar ? 'navbarbrand-h1 active' : 'navbarbrand-h1'}
      > Michael Larsen </h1>
      <p className={menubar ? 'navbarbrand-p active' : 'navbarbrand-p'}
      >Undergraduate Software Engineer</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ms-auto">
        <Nav.Link className="nav-about" id="menubar-link-container">
          <Link className={menubar ? 'menubar-link active' : 'menubar-link'}
          to="Aboutme" smooth={true} offset={-10} duration={200}> About </Link>
        </Nav.Link>
        <Nav.Link className="nav-academic" id="menubar-link-container">
          <Link className={menubar ? 'menubar-link active' : 'menubar-link'}
          to="Academic" smooth={true} offset={-40} duration={200}> Academic </Link>
        </Nav.Link>
        <Nav.Link className="nav-prof" id="menubar-link-container">
          <Link className={menubar ? 'menubar-link active' : 'menubar-link'}
          to="Professional" smooth={true} offset={-60} duration={200}> Professional </Link>
        </Nav.Link>
        <Nav.Link className="nav-teamwork" id="menubar-link-container">
          <Link className={menubar ? 'menubar-link active' : 'menubar-link'}
          to="Teamwork" smooth={true} offset={-60} duration={200}> Teamwork </Link>
        </Nav.Link>
        <Nav.Link className="nav-research" id="menubar-link-container">
          <Link className={menubar ? 'menubar-link active' : 'menubar-link'}
          to="Research" smooth={true} offset={0} duration={200}> Research </Link>
        </Nav.Link>

          <Nav.Link className="nav-resume" href={Resume} download="Michael_Larsen_Resume">
            <button className={menubar ? 'resume-button active' : 'resume-button'}
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
