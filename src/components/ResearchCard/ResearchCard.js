import React from "react";
import { Container, Card } from "react-bootstrap";
import ProblemBrief from "../../Assets/ProblemBrief.pdf"
import "./ResearchCard.css";

// Using history in props for routing to different components
const ResearchCard = (props) => {

  return (
    <React.Fragment>
    <div id="researchcard-parent">
      <Container fluid="md" id="researchcard-container">
        <Card>
          <Card.Body>
          <p style={{color: '#000000'}}><b>Engineering Thesis</b></p>
            <p>
              I am currently in the research and planning stage of my thesis, as
              I will be completing it in the first half of 2022.  My thesis will
              be focused on cryptocurrency and blockchain.
               My aim is to research alternative technologies to solve the
               ‘blockchain trilemma’, which describes that the three
               fundamentals of cryptocurrency; scalability, security and
               decentralisation can’t coexist without the sacrifice of one.
            </p>
            <p style={{color: '#841584', fontWeight: '600'}}>
            Key research topic areas include:
            </p>
            <p>
              <ul>
                <li>Blockchain scalability issues using Proof-of-Work consensus</li>
                <li>Current blockchain trilemma solutions such as Proof-of-Stake,
                off-chain transactions and sharding</li>
                <li>Alternative technologies, specifically Hashgraph consensus
                as a replacement for blockchain</li>
             </ul>
            </p>
            <p>
            For more information
            <a href={ProblemBrief} download="Is there a Future for PoW Blockchains"
            style={{textDecoration: 'none'}}> click here </a>
            for my problem analysis brief.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default ResearchCard;
