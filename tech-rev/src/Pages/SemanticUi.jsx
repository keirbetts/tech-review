import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import './SemanticUi.css'
import SemanticUiSidebar from './SemanticUiSidebar';
import semantic from '../img/semantic-ui.png'

const SemanticUi = () => {
  return (
    <div>
      <Container fluid="true" className="con-top">
        <h1
          style={{
            color: "whitesmoke",
            fontFamily: "Courier New",
            textAlign: "center",
          }}
        >
          <strong>Semantic-UI Review</strong>
        </h1>
        <br></br>
        <Row>
          <Col sm={1}>
            <br></br>
            <img
              alt=""
              src={semantic}
              style={{ height: "auto", width: "20rem", marginTop: "-1rem" }}
            />
            <hr className="hr" style={{ width: "20rem", float: "center" }}></hr>
            <SemanticUiSidebar />

            <div
              style={{
                color: "whitesmoke",
                fontFamily: "Courier New",
                width: "20rem",
              }}
            >
              <p>
                Best for: Developers who know JavaScript and have some experience.
                Those who want a more customisable alternative to bootstrap.
              </p>

              <p>
                Good: Offers a wide range of components with greater flexibility
                on styling than other libraries. Creates clean and modern designs.
              </p>

              <p>
                Limitations: Not suited to the beginner or developers who don't know JavaScript.
                Community is small so seeking help can be difficult. Lack of updates in recent
                years and no update at all between 2018-19.
              </p>
            </div>
          </Col>

          <Col className="para" sm={8}>
            <h3>
              <strong>Overview:</strong>
            </h3>
            <p>
              Offers an unrivalled selection of components, themes, collections
              and modules. Provides unique components such as feed and comment
              whilst relaxed designs allows for extensive styling to be completed
              by the user with ease.
            </p>
            <p>
              Components are easy to implement in projects and clear documentation
              with example code is provided.
            </p>
            <hr className="hr" style={{ width: "45rem", marginLeft: '0rem' }}></hr>
            <h3>
              <strong>Documentation:</strong>
            </h3>
            <p>
              Documentation provides clear installation advie with instruction on
              referencing style sheets. Is well set out and easy to read.
            </p>
            <p>
              A style guide is included in the documentation with clear advice on
              how the user should write their code.
            </p>
            <p>
              The sheer range of components and functionality can make it difficult
              to find what you are looking for in a timely manner.
            </p>
            <hr
              style={{ borderTop: "2px solid lightblue", width: "45rem", marginLeft: '0rem' }}
            ></hr>
            <h1>
              <strong>Features</strong>
            </h1>
            <h3>
              <strong>View</strong>
            </h3>
            <p>
              A view represents a piece of website content which may be considered
              as standard including an advertisement, comment or card. Item view
              can show 'large collections of content for display'.
              </p>
            <h3>
              <strong>Collection</strong>
            </h3>
            <p>
              As the name suggests this is a group of elements. In a collections
              the elements rely on each other for example a Grid requires Columns
              and Rows.
            </p>
            <h3>
              <strong>Element</strong>
            </h3>
            <p>
              A simple feature which can be implemented in standalone fashion such as
              a Button or Header. This is the largest section of Semantic-UI.
            </p>
            <h3>
              <strong>Module</strong>
            </h3>
            <p>
              A component which takes some of its functionaly through integrated JavaScript
              such as a checkbox. These come with the caveat of knowing JavaScript, and in
              certain cases make use of callbacks.
            </p>
            <h3>
              <strong>Behaviour</strong>
            </h3>
            <p>
              These cannot exist as a standalone component and are used to provide functionality
              to other components.
            </p>
            <p>
              Behaviours provide useful functionality such as form validation and the ability for
              elements to trigger action on a server.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SemanticUi;