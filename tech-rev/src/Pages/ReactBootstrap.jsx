import React from "react";
import { Container, Col, Row, ListGroup, Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import './ReactBootstrap.css'
import rbimg from '../img/react-bootstrap.png'


const ReactBootstrap = () => {
  return (
    <Container>
      <h1 style={{ color: "whitesmoke", fontFamily: 'Courier New', textAlign: 'center' }}><strong>Bootstrap Review</strong></h1>
      <br />
      <Row>
        <Col sm={2}>
          <Card style={{ width: "20rem" }}>
            <Card.Header>BreakDown</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h6 style={{ color: "green", float: "left" }}>Overall Rating:</h6>
                <div style={{ float: "right" }}>
                  <StarRatingComponent
                    name="overallRating"
                    editing={false}
                    renderStarIcon={() => <span>★</span>}
                    starCount={5}
                    value={4}
                  />
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 style={{ color: "green", float: "left" }}>Ease of Use:</h6>
                <div style={{ float: "right" }}>
                  <StarRatingComponent
                    name="EaseOfUseRating"
                    editing={false}
                    renderStarIcon={() => <span>★</span>}
                    starCount={5}
                    value={4}
                  />
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 style={{ color: "green", float: "left" }}>
                  Beginner Friendly:
              </h6>
                <div style={{ float: "right" }}>
                  <StarRatingComponent
                    name="Beginner friendly"
                    editing={false}
                    renderStarIcon={() => <span>★</span>}
                    starCount={5}
                    value={4}
                  />
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 style={{ color: "green", float: "left" }}>Documentation:</h6>
                <div style={{ float: "right" }}>
                  <StarRatingComponent
                    name="Documentation"
                    editing={false}
                    renderStarIcon={() => <span>★</span>}
                    starCount={5}
                    value={4}
                  />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <br></br>
          <img alt='' src={rbimg} style={{ height: 'auto', width: '20rem' }} />
          <br></br>
          <br></br>
          <div style={{ color: 'whitesmoke', fontFamily: 'Courier New', width: '20rem' }}>
            <p>Best for: beginners and those looking to quickly create usable components with ease.</p>

            <p>Good: Makes responsive design simple. A range of components which can be effectively used. Produces better looking websites. </p>

            <p>Limitations: Designs can be limited, those with better css skills should opt to make use of these in most instances. </p>
          </div>
        </Col>
        <Col className='para' sm={6}>
          <h3><strong>Overview:</strong></h3>
          <p>React Bootstrap is effective and easy to use but some components remained limited as they cannot be styled to a great extent.</p>
          {/* This issue is highlighted by the carousel where styling is difficult and no default styles are available for images etc. */}
          <p>Largely dissipates the difficulties caused by CSS, by giving significant control over individual components, but certain components remain difficult to integrate successfully.</p>
          <hr style={{ borderTop: '2px solid lightblue', width: 'auto' }}></hr>
          <h3><strong>Documentation:</strong></h3>
          <p>Clear with good examples. Advice on how to install and import is clear and easy to find. The docs should not pose and difficulties even for the inexperienced user.</p>
          <p>In many instances examples can be copied and pasted with only minor adjustments</p>
          <p> The number of components and their flexibility means it can take time to find what you're looking for. </p>
          <hr style={{ borderTop: '2px solid lightblue', width: 'auto' }}></hr>
          <h1><strong>Components</strong></h1>
          <h3><strong>Container</strong></h3>
          <p> A responsive container is effective and easy to use. The Col and Row components work well and the props system for responsive design is simple.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ReactBootstrap;
