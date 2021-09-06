import React from 'react';
import ResearchCard from "../components/ResearchCard/ResearchCard";
import Fade from "react-reveal/Fade";
import "./Research.css";

export default function Body() {
  return (
    <div id='Research' className="research-container">
      <Fade bottom>
        <div className="title-container">
          <h1><span class="title">Research</span></h1>
        </div>
      </Fade>
      <Fade bottom>
        <div className="researchcard-container">
          <ResearchCard/>
        </div>
      </Fade>
    </div>
  );
}
