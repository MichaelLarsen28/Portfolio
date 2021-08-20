import React from 'react';
import ProfCard from "../components/ProfCard/ProfCard";
import "./Professional.css";

export default function Body() {
  return (
    <div id='Professional' className="professional-container">
    <div className="title-container">
      <h1><span class="title">Professional Expereinces and Projects</span></h1>
    </div>
      <ProfCard />
    </div>
  );
}
