import React from "react";
import { Card } from "react-bootstrap";

import "./AboutMeCard.css";

// Using history in props for routing to different components
const AboutMeCard = (props) => {

  return (
    <React.Fragment>
    <div id="aboutmecard-parent">
        <Card>
          <Card.Body>
            <p>
             I'm a final year Software Engineering student at The University
             of Technology Sydney.  My interest in technology started back in
             early high school when I got my first laptop (The White MacBook).
             I enjoyed playing video games then, as do most 12-year-old boys.
             I was able to host my own dedicated server using the schools Wi-Fi
             and play with my friends ... until the technology staff
             discovered what we were doing.
             </p>

             <p>
             Fast-forward to today, and I’ve been able to pursue my interests
             in technology and engineering through university. I’ve applied what
             I’ve learnt to real-word scenarios such as large-scale network
             testing and control system integration.  These experiences were
             gained through my internships at large, multi-industry
             organisations and smaller emerging companies.
             </p>

             <p>
             I am looking for opportunities in software development where I can
             grow as a young engineer working with like-minded people who enjoy
             problem solving.
             </p>

             <p style={{color: '#841584', fontWeight: '600'}}>
             Here are a few technologes I've been working with recently:
             </p>
             <p>
               <ul>
                 <li>JavaScript (ES6+)</li>
                 <li>React</li>
                 <li>Node.js</li>
                 <li>React-Bootstrap, Material UI</li>
                 <li>CSS, SASS</li>
                 <li>Python (Pandas, Numpy)</li>
                 <li>AWS (EC2, MQTT)</li>
              </ul>
             </p>
           </Card.Body>
        </Card>
    </div>
    </React.Fragment>
  );
};

export default AboutMeCard;
