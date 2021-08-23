import React from "react";
import {IconContext} from "react-icons";
import {Navbar, Nav, Container} from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


import "./FooterBar.css";

const FooterBar = () => {

  return (
    <React.Fragment>
    <div id="footerbar-parent">

        <div className="footer-container">

        <h1 id="footer-title"> Social </h1>

        <section className="footer-data">
        <a href="mailto:michael.larsen@iinet.net.au">
          <IconContext.Provider value={{ className:"myReact-icons"}}>
          <MdEmail/>
          </IconContext.Provider>
          &nbsp;Email
        </a>
          <a href="https://www.linkedin.com/in/michaellarsen28/" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ className:"myReact-icons"}}>
            <AiFillLinkedin/>
            </IconContext.Provider>
            &nbsp;LinkedIn
          </a>
          <a href="https://github.com/MichaelLarsen28" target="_blank" rel="noreferrer">
          <IconContext.Provider value={{ className:"myReact-icons"}}>
          <AiFillGithub/>
          </IconContext.Provider>
           &nbsp;GitHub
          </a>
        </section>
         <p>Designed & Built by Michael Larsen </p>
        </div>
    </div>
    </React.Fragment>
  );
};

export default FooterBar;
