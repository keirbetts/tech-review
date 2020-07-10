import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "@reach/router";
import "./fecards.css";
import Title from "../components/title";

const FrontEndCards = () => {
  return (
    <div>
      <Title />
      <CardDeck>
        <Card border="light">
          {/* <Card.Img variant="top" /> */}
          <Card.Body style={{ color: "whitesmoke" }}>
            <Card.Title>React Bootstrap</Card.Title>
            <Card.Text>
              Popular bootstrap designs rebuilt for seamless react integration
            </Card.Text>
            <br></br>
            <h5 style={{ color: "green", float: "left" }}>Overall Rating:</h5>
            <div style={{ float: "right" }}>
              <StarRatingComponent
                name="overallRating"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={4}
              />
            </div>
            <br></br>
            <br></br>
            <h5 style={{ color: "green", float: "left" }}>Ease of Use:</h5>
            <div style={{ float: "right" }}>
              <StarRatingComponent
                name="EaseOfUseRating"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={4}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <Link style={{ color: "black" }} to={"/felibraries/reactbootstrap"}>
              Find Out More
            </Link>
          </Card.Footer>
        </Card>
        <Card bg={"light"}>
          <Card.Body style={{ color: "whitesmoke" }}>
            <Card.Title>Semantic UI</Card.Title>
            <Card.Text>lalalalal</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link style={{ color: "black" }} to={"/felibraries/semantic-ui"}>
              Find Out More
            </Link>
          </Card.Footer>
        </Card>
        <Card bg={"light"}>
          <Card.Body style={{ color: "whitesmoke" }}>
            <Card.Title>Material UI</Card.Title>
            <Card.Text>lalalala</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link style={{ color: "black" }} to={"/felibraries/material-ui"}>
              Find Out More
            </Link>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default FrontEndCards;
