import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./ReactBootstrap.css";
import rbimg from "../img/react-bootstrap.png";
import PageSideBar from "./ReactBootstrapSideBar";

class ReactBootstrap extends Component {

  render() {
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
            <strong>React Bootstrap Review</strong>
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
              <PageSideBar />

              <div
                style={{
                  color: "whitesmoke",
                  fontFamily: "Courier New",
                  width: "20rem",
                }}
              >
                <p>
                  Best for: Beginners and those looking to quickly create usable
                  components with ease.
              </p>

                <p>
                  Good: Makes responsive design simple. Offers  range of components
                  which can be easily and effectively implemented. Large community
                  makes finding support simple.
              </p>

                <p>
                  Limitations: Designs often appear outdated and are difficult to customise, for
                example the carousel. Those with better css skills should opt to make use of these in most instances.{" "}
                </p>
              </div>
            </Col>

            <Col className="para" sm={8}>
              <h3>
                <strong>Overview:</strong>
              </h3>
              <p>
                React Bootstrap is effective and easy to use but some components
                remained limited as they cannot be styled easily.
            </p>
              <p>
                Largely dissipates the difficulties caused by CSS, by giving
                significant control over individual components, but certain
                components remain difficult to integrate successfully.
            </p>
              <hr className="hr" style={{ width: "45rem", marginLeft: '0rem' }}></hr>
              <h3>
                <strong>Documentation:</strong>
              </h3>
              <p>
                The documentation is clear with good detailed examples for each component.
            <p>
                  Advice on how to install and import is easy to find.
            </p>
                <p>
                  The docs should not pose difficulties even for the novice user. In many instances components
                      can be copied and pasted from the docs with only minor adjustments.
            </p>
              </p>
              <p>
                On the flipside the number of components and their
              flexibility means it can take time to find what you're looking
              for.
            </p>
              <hr
                style={{ borderTop: "2px solid lightblue", width: "45rem", marginLeft: '0rem' }}
              ></hr>
              <h1>
                <strong>Components</strong>
              </h1>
              <h3>
                <strong>Cards</strong>
              </h3>
              <p>
                Cards provide a simple way to display content responsively using components such as Carddeck.
              </p>
              <p>
                Card appear outdated and difficult to integrate into a clean and modern design, often appearing square and blocky.
              </p>
              <p>
                Styling to address this can be difficult, whilst including an image within a card often remains a
  drawn out process.
                </p>
              <h3>
                <strong>Carousel</strong>
              </h3>
              <p>
                {" "}
                Quickly creates a working carousel.
            </p>
              <p>
                Styling inside the carousel is difficult, thus formatting and
                adding images it time consuming and may prove challenging for
                the inexperiences user
</p>
              <p>
                A controlled carousel is available as an extension of the standard
                carousel.
            </p>
              <h3>
                <strong>Container</strong>
              </h3>
              <p>
                {" "}
                A responsive container is easy to implement and style.
              </p>
              <p>
                The Col and Row components work well within this system
              </p>
              <p>
                Props is an effective tool to make flexible, responsive designs.
            </p>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default ReactBootstrap;