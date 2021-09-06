import React from "react";
import { Container, Card } from "react-bootstrap";
import "./TeamCard.css";

// Using history in props for routing to different components
const TeamCard = (props) => {

  return (
    <React.Fragment>
    <div id="teamcard-parent">
      <Container fluid="md" id="teamcard-container">
        <Card>
          <Card.Body>
            <p style={{color: '#000000'}}><b>University</b></p>
              <p>
                Teamwork is a key element of my university studies.  Most of
                my subjects involve groupwork, such as major projects or
                 class discussions.  For example, the subject; ‘Engineering
                 Project Management’, required groups of 6 to produce an
                  engineering report on delivering a weather recording station
                   in rural NSW.   This task helped me learn how to deal with
                   disagreements and different opinions, by allowing for
                   constructive criticism.  I also learnt how to communicate
                   correctly to express my concerns and ideas.  I received a
                   <b style={{color: '#841584', fontWeight: '600'}}> high
                   distinction </b> mark of 90 for the subject.
              </p>
              <p>
                The subject; ‘Software Studio 2A’, required groups to create
                an automatic study group arrangement web application.  I learnt
                how to work in an agile environment using the
                <b style={{color: '#841584', fontWeight: '600'}}> scrum framework.
                </b> I worked with other team members with sprint planning and
                  completing tasks for each sprint.  I also contributed to weekly
                   standups, product backlog and sprint reviews. I received a
                  <b style={{color: '#841584', fontWeight: '600'}}> high
                  distinction </b>
                   mark of 92 for the subject.
              </p>
            <p style={{color: '#000000'}}><b>Work</b></p>
              <p>
                I experienced teamwork in multiple projects across
                 multidisciplinary teams during my internships.
                 <b style={{color: '#841584', fontWeight: '600'}}> The key skills
                 I learnt include: </b>
              </p>
              <p>
                <ul>
                  <li>Communication - meetings, client interaction and project work</li>
                  <li>Time management – prioritising tasks and delivering on deadlines</li>
                  <li>Listening – open mind during group work and utilising
                  constructive criticism </li>
                  <li>Collaboration – sharing different perspectives and experiences</li>
               </ul>
              </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default TeamCard;
