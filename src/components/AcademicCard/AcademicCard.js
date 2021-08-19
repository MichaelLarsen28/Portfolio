import React from "react";
import { Container, Card } from "react-bootstrap";

import "./AcademicCard.css";

// Using history in props for routing to different components
const AcademicCard = (props) => {

  return (
    <React.Fragment>
    <div id="academiccard-parent">
        <Card>
          <Card.Title
          style={{marginLeft:'15px', marginTop:'15px', color: 'rgb(9,31,252)'}}>
          Academic Experiences and Projects</Card.Title>
            <Card.Body>Academic Experiences and Projects</Card.Body>
        </Card>
    </div>
    </React.Fragment>
  );
};

export default AcademicCard;
