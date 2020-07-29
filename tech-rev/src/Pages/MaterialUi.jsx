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
          <strong>Material-UI Review</strong>
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
              Material UI offers an extensive choice of components with a
              variety of designs. Components are clean and can be used to create
              professional websites.
            </p>
            <p>
              Components are easy to implement in projects and clear documentation
              with example code is provided.
            </p>
            <hr className="hr" style={{ width: "25rem" }}></hr>
            <h3>
              <strong>Documentation:</strong>
            </h3>
            <p>
              Documentation provides clear installation advie with instruction on
              referencing style sheets. Commands are provided which offers further
              support for the first-time user.
            </p>
            <p>
              It is evident how the components will look, with an integrated sandbox
              editor provided. This gives the user oportunity to experiment with code
              prior to implementation in a project.
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
              Supports a range of actions including integrated controls and an
              overflow menu.
              </p>
            <p>
              The basic design provides a minimalist in style and
              offers a number of variations which can be selected at the users
              digression.
              </p>
            <p>
              Images can be easily incorporated and documentation provides
              information on where problems may occur, offering potential
              solutions to these issues.
            </p>

            <h3>
              <strong>Container</strong>
            </h3>
            <p>
              Responsive and easy to use. The user can choose between a fluid
              or fixed container
            </p>
            <p>
              Row and Col components are provided to use in conjuction with the
              CSS grid system
              </p>
            <p>
              The option to define clear spacing for each component is apparent,
              making CSS easier to use.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MaterialUi;
