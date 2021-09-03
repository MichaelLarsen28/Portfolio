import React from 'react';
import ResearchCard from "../components/ResearchCard/ResearchCard";
import "./Research.css";

export default function Body() {
  return (
    <div id='Research' className="research-container">
      <div className="title-container">
        <h1><span class="title">Research</span></h1>
      </div>
      <ResearchCard/>
    </div>
  );
}
