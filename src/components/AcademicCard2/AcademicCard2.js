import React from "react";
import { Card } from "react-bootstrap";
import DeansList from "../../Assets/DeansList.pdf"
import "./AcademicCard2.css";

// Using history in props for routing to different components
const AcademicCard2 = (props) => {

  return (
    <React.Fragment>
    <div id="academiccard2-parent">
        <Card>
            <Card.Body>
            <p>
            I was fortunate enough to be included on the 2021 Dean’s List which
            recognises outstanding academic achievement in undergraduate courses
             in Engineering and Information Technology.  To be included on the
             Dean’s List, I had to achieve a minimum score of
              85% across all subjects studied in the previous academic year.
            </p>

            <p>
            <a href={DeansList} download="Michael_Larsen_Deans_List">
            Click here</a> for my Dean's List Certificate.
            </p>

            </Card.Body>
        </Card>
    </div>
    </React.Fragment>
  );
};

export default AcademicCard2;
