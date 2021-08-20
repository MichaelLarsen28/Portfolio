import React from 'react';
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";
import "./AboutMe.css";

export default function Body() {
  return (
    <div id='Aboutme' className="aboutme-container">
      <div className="title-container">
        <h1><span class="title">About Me</span></h1>
      </div>
      <AboutMeCard />
    </div>
  );
}
