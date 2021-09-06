import React from 'react';
import TeamCard from "../components/TeamCard/TeamCard";
import Fade from "react-reveal/Fade";
import "./Teamwork.css";

export default function Body() {
  return (
    <div id='Teamwork' className="teamwork-container">
      <Fade bottom>
        <div className="title-container">
          <h1><span class="title">Teamwork</span></h1>
        </div>
      </Fade>
      <Fade bottom>
        <div className="teamcard-container">
          <TeamCard />
        </div>
      </Fade>
    </div>
  );
}
