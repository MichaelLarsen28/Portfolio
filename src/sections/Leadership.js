import React from 'react';
import LeadCard from "../components/LeadCard/LeadCard";
import "./Leadership.css";

export default function Body() {
  return (
    <div id='Leadership' className="leadership-container">
      <div className="title-container">
        <h1><span class="title">Leadership</span></h1>
      </div>
      <LeadCard/>
    </div>
  );
}
