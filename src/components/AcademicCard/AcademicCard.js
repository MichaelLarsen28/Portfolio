import React from "react";
import { Card } from "react-bootstrap";

import "./AcademicCard.css";

// Using history in props for routing to different components
const AcademicCard = (props) => {

  return (
    <React.Fragment>
    <div id="academiccard-parent">
        <Card>
            <Card.Body>
            <p>
            At university we take multiple studio classes for software
            engineering which focuses on web development.  I’ve enjoyed these
            classes as it allowed me to grow my technical skills and use
            technologies commonly used by major companies.  Aside from the
            technical growth I also experienced the software development
            life cycle from receiving the requirements from the client,
            planning, and analysing to implementing and maintaining the product.
            </p>
            <p>
            I also learnt how to work in an agile framework using scrum to
            develop and deliver the highest value product to the client.
            I have received two high distinctions and one distinction so far
            for these subjects.
            </p>

            <p style={{color: '#1221ff'}}>
            Some examples of the websites I built are shown to the side:
            </p>

            </Card.Body>
        </Card>
    </div>
    </React.Fragment>
  );
};

export default AcademicCard;
