import React from "react";
import { Container, Col, Row, ListGroup, Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const ReactBootstrap = () => {
  return (
    <Container>
      <h1 style={{ color: "whitesmoke" }}>Bootstrap Review</h1>
      <br />
      <br />
      <Row>
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

        <Col>This is the review section???????</Col>
      </Row>
    </Container>
  );
};

export default ReactBootstrap;
