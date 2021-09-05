import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Link } from 'react-scroll';
import {IconContext} from "react-icons";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Statement.css";

// Using history in props for routing to different components
const Statement = (props) => {

  return (
    <React.Fragment>
    <div id="statement-parent">
    <Container fluid="md" id="statement-container">
          <div className="typing-container">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                .pauseFor(2000)
                .typeString("Hi I'm Michael.")
                .start();
              }}
            />
          </div>
          <p>
          I'm a design-minded undergraduate software engineer focused on
          approaching and solving <br/> problems in creative ways using agile
          decision-making methodologies.
          </p>


          <div className="scroll-down">
            <h6>Scroll down to learn more</h6>
            <div class="arrow">
              <Link class="fa fa-arrow-down fa-2x"
              to="Aboutme" smooth={true} offset={-10} duration={200}>
                <IconContext.Provider value={{ className:"statement-icon"}}>
                <AiOutlineArrowDown/>
                </IconContext.Provider>
               </Link>
            </div>
          </div>
    </Container>
    </div>
    </React.Fragment>
  );
};

export default Statement;
