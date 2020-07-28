import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import BootstrapApiCall from "./BootstrapApiCall";

const PageSideBar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={30}>
            <h5 style={{ float: "left", color: "whitesmoke" }}>
              <strong>Overall Rating</strong>
            </h5>
            <div style={{ float: "center" }}>
              <StarRatingComponent
                name="overallRating"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={4}
              />
            </div>
            <h5 style={{ float: "left", color: "whitesmoke" }}>
              <strong>Ease of Use</strong>
            </h5>
            <div style={{ float: "center" }}>
              <StarRatingComponent
                name="EaseOfUseRating"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={4}
              />
            </div>
            <h5 style={{ float: "left", color: "whitesmoke" }}>
              <strong>Documentation</strong>
            </h5>
            <div style={{ float: "center" }}>
              <StarRatingComponent
                name="Documentation"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={4}
              />
            </div>
            <BootstrapApiCall />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageSideBar;
