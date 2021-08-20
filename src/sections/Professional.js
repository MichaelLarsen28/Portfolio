import React from 'react';
import ProfCard from "../components/ProfCard/ProfCard";
import ProfCard2 from "../components/ProfCard2/ProfCard2";
import "./Professional.css";

export default function Body() {
  return (
    <div id='Professional' className="professional-container">
    <div className="title-container">
      <h1><span class="title">Professional Expereinces and Projects</span></h1>
    </div>
      <ProfCard />
      <ProfCard2 />
    </div>
  );
}
