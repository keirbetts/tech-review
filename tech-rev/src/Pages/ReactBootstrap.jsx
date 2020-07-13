import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./ReactBootstrap.css";
import rbimg from "../img/react-bootstrap.png";

const ReactBootstrap = () => {
  return (
    <div>
      <Container fluid='true' className='con-top'>
        <h1
          style={{
            color: "whitesmoke",
            fontFamily: "Courier New",
            textAlign: "center",
          }}
        >
          <strong>React Bootstrap Review</strong>
        </h1>
        <br></br>
        <Row>
          <Col sm={1}>
            <br></br>
            <img alt="" src={rbimg} style={{ height: "auto", width: "20rem", marginTop: '-1rem' }} />
            <hr className='hr' style={{ width: '20rem' }}></hr>
            <h5 style={{ float: "left", color: "whitesmoke" }}>
              <strong>Overall Rating:</strong>
            </h5>
            <div style={{ float: "right" }}>
              <StarRatingComponent
                name="overallRating"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={4}
              />
            </div>
            <h5 style={{ float: "left", color: "whitesmoke" }}>
              <strong>Ease of Use:</strong>
            </h5>
            <div style={{ float: "right" }}>
              <StarRatingComponent
                name="EaseOfUseRating"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={4}
              />
            </div>
            {/* <h5 style={{ float: "left", color: "whitesmoke" }}>
            <strong>Entry level:</strong>
          </h5>
          <div style={{ float: "right" }}>
            <h5 style={{ float: "right", color: "whitesmoke" }}>
              <p>For beginners</p>
            </h5>
          </div> */}
            <h5 style={{ float: "left", color: "whitesmoke" }}>
              <strong>Documentation:</strong>
            </h5>
            <div style={{ float: "right" }}>
              <StarRatingComponent
                name="Documentation"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={4}
              />
            </div>
            <div
              style={{
                color: "whitesmoke",
                fontFamily: "Courier New",
                width: "20rem",
              }}
            >
              <p>
                Best for: beginners and those looking to quickly create usable
                components with ease.
            </p>

              <p>
                Good: Makes responsive design simple. A range of components which
              can be effectively used. Produces better looking websites.{" "}
              </p>

              <p>
                Limitations: Designs can be limited, those with better css skills
              should opt to make use of these in most instances.{" "}
              </p>
            </div>
          </Col>

          <Col className="para" sm={8}>
            <h3>
              <strong>Overview:</strong>
            </h3>
            <p>
              React Bootstrap is effective and easy to use but some components
              remained limited as they cannot be styled to a great extent.
          </p>
            {/* This issue is highlighted by the carousel where styling is difficult and no default styles are available for images etc. */}
            <p>
              Largely dissipates the difficulties caused by CSS, by giving
              significant control over individual components, but certain
              components remain difficult to integrate successfully.
          </p>
            <hr className='hr'></hr>
            <h3>
              <strong>Documentation:</strong>
            </h3>
            <p>
              Clear with good examples. Advice on how to install and import is
              clear and easy to find. The docs should not pose and difficulties
              even for the inexperienced user.
          </p>
            <p>
              In many instances examples can be copied and pasted with only minor
              adjustments
          </p>
            <p>
              {" "}
              The number of components and their flexibility means it can take
            time to find what you're looking for.{" "}
            </p>
            <hr style={{ borderTop: "2px solid lightblue", width: "auto" }}></hr>
            <h1>
              <strong>Components</strong>
            </h1>
            <h3>
              <strong>Cards</strong>
            </h3>
            <p>
              {" "}
              A responsive container is effective and easy to use. The Col and Row
              components work well and the props system for responsive design is
              simple.
          </p>
            <h3>
              <strong>Carousel</strong>
            </h3>
            <p>
              {" "}
              Creates a carousel with ease. However, bootstrap does not offer
              styling within the carousel, this means adding images is time
              consuming and difficult, especially for the inexpienced css user. A
              controlled carousel is also an option.
          </p>
            <h3>
              <strong>Container</strong>
            </h3>
            <p>
              {" "}
              A responsive container is effective and easy to use. The Col and Row
              components work well and the props system for responsive design is
              simple.
          </p>
            <h3>
              <strong>Documentation</strong>
            </h3>
            <p>
              {" "}
              The documentations are clear with good examples. Advice on how to
              install and import is clear and easy to find. The docs should not
              pose and difficulties even for the inexperienced user. One issue
              that could be raised is the number of components and their
              flexibility means it can take time to find what you're looking for.
              In many instances examples can be copied and pasted with only minor
              adjustments
          </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReactBootstrap;
