import React from "react";
import { Button, Container, Row, Col } from 'react-bootstrap'
import './title.css'

const Title = () => {
  return (
    <div className='app'>
      <main>
        <br></br>
        <br></br>
        <Container fluid='true'>
          <Col style={{ color: 'whitesmoke', fontFamily: 'Courier New' }}>
            <Row lg={12} className='justify-content-center' style={{ marginTop: '50px' }}>
              <h1><strong>Tech Review</strong></h1>
            </Row>
            <br></br>
            <Row className='justify-content-center'>
              <h3 lg={12}>The One Stop Destination for Library and Package Reviews</h3>
            </Row>
          </Col>
          <br></br>
          <hr className='hr'></hr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Row className='justify-content-center' style={{ marginTop: '-100px', textAlign: 'center' }}>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px', color: '#00ff00' }} variant="secondary" href='/felibraries'>Front End</Button>
            </Col>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px', color: '#00ff00' }} variant="dark" href='/belibraries' >Back End</Button>
            </Col>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px', color: '#00ff00' }} variant="secondary" href='/npm-packages' >NPM Packages</Button>
            </Col>
          </Row>
        </Container>
        <br></br>
      </main>
    </div >
  );
};

export default Title;
