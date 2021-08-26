import React from 'react';
import TeamCard from "../components/TeamCard/TeamCard";
import "./Teamwork.css";

export default function Body() {
  return (
    <div id='Teamwork' className="teamwork-container">
      <div className="title-container">
        <h1><span class="title">Teamwork</span></h1>
      </div>
      <TeamCard />
    </div>
  );
}
