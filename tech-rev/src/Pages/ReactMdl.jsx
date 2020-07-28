import React from 'react';
import './ReactMdl.css'
import MdlSideBar from './ReactMdlSideBar'
import { Container, Col, Row } from "react-bootstrap";
import reactLogo from '../img/react-logo.png'



const ReactMdl = () => {
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
          <strong>React MDL Review</strong>
        </h1>
        <br></br>
        <Row>
          <Col sm={1}>
            <br></br>
            <img
              alt=""
              src={reactLogo}
              style={{ height: "auto", width: "20rem", marginTop: "-1rem" }}
            />
            <hr className="hr" style={{ width: "20rem", float: "center" }}></hr>
            <MdlSideBar />

            <div
              style={{
                color: "whitesmoke",
                fontFamily: "Courier New",
                width: "20rem",
              }}
            >
              <p>
                Good: Offers a range of components and makes styling accessible
                to the beginner.
              </p>

              <p>
                Limitations:  Significant compatability issues with React.
                 </p>
              <p>
                The gitHub repo states ‘the official Layout component is not fully compatible with React’.
                 </p>
              <p>
                The patch provided
              does not work with more recent react scripts and another workaround is required.
              </p>
            </div>
          </Col>

          <Col className="para" sm={8}>
            <h3>
              <strong>Overview:</strong>
            </h3>
            <p>
              Can appear confusing and users will be put off especially where more usable packages are available. This is reflected by its usage in recent months (see downloads table).
            </p>
            <p>
              Major issues with compatability whilst the components offered are not any improvement on a package such as
              React Bootstrap. For this reason React-MDL should be avoided.
            </p>
            <p>
              Components also spell more compatability issues, this time with browsers.
              Some components require a dialogue component which is only supported by two browsers currently (chrome and opera).
            </p>
            <hr className="hr" style={{ width: "45rem", marginLeft: '0rem' }}></hr>
            <h3>
              <strong>Documentation:</strong>
            </h3>
            <p>
              Installation guidance is clear when you land on the page.
       </p>
            <p>
              Less clear is the need to require in the original MDL files into your index.html (or as suggested create a new directory for them). This is disappointing</p>
            <p>
              Can be difficult to read as writing is small and large amounts of the page are frequently left blank in certain cases.
               </p>
            <p>
              The standard of English is subpar, even on the laconic welcome page. Solid examples are provided and descriptions
            </p>
            <p>
              Examples are good but can be convoluted, though not verbose.
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
              Cards provide a simple way to display content.
              </p>
            <p>
              Cards can do initially appear outdated but they are easier to style than their bootstrap counterparts
              </p>
            <h3>
              <strong>Grid</strong>
            </h3>
            <p>
              {" "}
              A responsive container is easy to implement and style.
              </p>
            <p>
              Props is an effective tool to make flexible, responsive designs, but not an upgrade on Bootstrap
            </p>
            <p>
              The React-MDL grid is a useful tool, but not an upgrade on other packages and given the compatability
              issues and the poor quality of documentation is best avoided.
              </p>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default ReactMdl;