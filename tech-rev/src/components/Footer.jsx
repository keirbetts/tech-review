import React from 'react';
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='con'>
        <Row>
          <Col lg={3}>
            <h5>Built With React</h5></Col>
          <Col lg={9}> <h5>By Developers For Developers</h5></Col>
        </Row>
      </Container>
    </div>
  );
};



export default Footer;