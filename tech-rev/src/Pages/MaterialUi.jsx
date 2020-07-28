import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MaterialUIPageSideBar from "./MaterialUiSideBar";
import rbimg from "../img/MaterialUI.png";

const MaterialUi = () => {
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
          <strong>MaterialUi Review</strong>
        </h1>
        <br></br>
        <Row>
          <Col sm={1}>
            <br></br>
            <img
              alt=""
              src={rbimg}
              style={{ height: "auto", width: "20rem", marginTop: "-1rem" }}
            />
            <hr className="hr" style={{ width: "20rem", float: "center" }}></hr>
            <MaterialUIPageSideBar />

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
                Good: Makes responsive design simple. A range of components
                which can be effectively used. Produces better looking websites.{" "}
              </p>

              <p>
                Limitations: Designs can be limited, those with better css
                skills should opt to make use of these in most instances.{" "}
              </p>
            </div>
          </Col>

          <Col className="para" sm={8}>
            <h3>
              <strong>Overview:</strong>
            </h3>
            <p>
              MaterialUi is effective and easy to use it styling are more modern
            </p>
            {/* This issue is highlighted by the carousel where styling is difficult and no default styles are available for images etc. */}
            <p>
              Largely dissipates the difficulties caused by CSS, by giving user
              more control over components in term of spacing margins. Its
              integration with CSS grid helps with placements of different
              components.
            </p>
            <hr className="hr" style={{ width: "25rem" }}></hr>
            <h3>
              <strong>Documentation:</strong>
            </h3>
            <p>
              Clear with good examples. The docs are clear on how to install
              material ui and has clear instructions on how to reference their
              own style sheets. They also have the command to help you along as
              well
            </p>
            <p>
              Docs are also clear on how components will looks and have an in
              page sandbox editor, giving the user an opportunity to try the
              code before using it.
            </p>
            <p>
              {" "}
              The number of components and their different variety means it can
              take time to find what you're looking for.{" "}
            </p>
            <hr
              style={{ borderTop: "2px solid lightblue", width: "25rem" }}
            ></hr>
            <h1>
              <strong>Components</strong>
            </h1>
            <h3>
              <strong>Cards</strong>
            </h3>
            <p>
              {" "}
              The card component for material UI supports multiple actions such
              as UI controls and an overflow menu. It has a minimalist looking
              design and has different variants that users can choose to use.
              Images can also be incorporated into the component and the
              documentations are clear where problems might arises and offer
              possible solution for them.
            </p>

            <h3>
              <strong>Container</strong>
            </h3>
            <p>
              {" "}
              Material UI is similar to bootstrap, in that it is responsive and
              easy to use. It provides the option for a fixed container or a
              fluid container. Material UI also has a row and col component,
              that can be used in conjunction with CSS grid. It also has the
              option to define clear spacing for each component which could make
              CSS more manageable.
            </p>
            <h3>
              <strong>Navigation</strong>
            </h3>
            <p>
              {" "}
              Material UI offers an extensive choice of components with a
              variety of designs, they all look very clean and are ideal for a
              professional looking site. The components that can be use such as
              drawer, menu are all easy to use and have documents that clear on
              how to implement them as well as example code that can be use.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MaterialUi;
