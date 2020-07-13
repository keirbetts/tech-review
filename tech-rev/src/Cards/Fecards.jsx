import React from 'react';
import "./fecards.css";
import StarComp from '../components/StarComp'
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "@reach/router";

const Fecards = () => {
  return (
    <div>
      <h1 style={{
        color: "whitesmoke",
        textAlign: "center",
        fontFamily: "Courier New",
      }}><strong>Front End Libraries</strong></h1>
      <hr className='hr'></hr>
      <br></br>
      <Container fluid='true' style={{ marginLeft: '2rem', marginTop: '0rem' }}>
        <Row>
          <div style={{ color: '#00ff00', fontFamily: 'Courier New' }}>
            <Col sm={3}><h2><strong>React Bootstrap</strong></h2>
              <p><strong>Bootstrap designs rebuilt for React integration</strong></p>
              <StarComp />
              <Button variant='warning'>
                <Link style={{ color: "black" }} to={"/felibraries/reactbootstrap"}>
                  Find Out More
            </Link>
              </Button>
            </Col>
            <Col sm={4}><h2><strong>Material UI</strong></h2>
              <p><strong>Bootstrap designs rebuilt for React integration</strong></p>
              <StarComp />
              <Button variant='warning'>
                <Link style={{ color: "black" }} to={"/felibraries/material-ui"}>
                  Find Out More
            </Link>
              </Button>
            </Col>
          </div>
        </Row>
      </Container>
    </div >
  );
};

export default Fecards;