import React from 'react';
import "./fecards.css";
import StarRatingComponent from "react-star-rating-component";
import Title from "../components/title";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "@reach/router";

const Fecards = () => {
  return (
    <div>
      <Title />
      <Container>
        <Row>
          <div style={{ color: '#00ff00', fontFamily: 'Courier New' }}>
            <Col sm={4}><h2><strong>React Bootstrap</strong></h2>
              <h5><strong>Popular bootstrap designs rebuilt for seamless react integration</strong></h5>
              <h5 style={{ float: "left" }}><strong>Overall Rating:</strong></h5>
              <div style={{ float: "right" }}>
                <StarRatingComponent
                  name="overallRating"
                  editing={false}
                  renderStarIcon={() => <span>★</span>}
                  starCount={5}
                  value={4}
                />
              </div>
              <h5 style={{ float: "left" }}><strong>Ease of Use:</strong></h5>
              <div style={{ float: "right" }}>
                <StarRatingComponent
                  name="EaseOfUseRating"
                  editing={false}
                  renderStarIcon={() => <span>★</span>}
                  starCount={5}
                  value={4}
                />
              </div>
              <Button variant='warning'>
                <Link style={{ color: "black" }} to={"/felibraries/reactbootstrap"}>
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