import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "@reach/router";

const FrontEndCards = () => {
  return (
    <div>
      <CardDeck>
        <Card bg={"dark"}>
          <Card.Img variant="top" />
          <Card.Body style={{ color: "#36d1dc" }}>
            <Card.Title>React Bootstrap</Card.Title>
            <Card.Text>
              Popular bootstrap designs rebuilt for seamless react integration
            </Card.Text>
            <StarRatingComponent
              name="overAllRating"
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={4}
            />
            <StarRatingComponent
              name="overAllRating"
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={4}
            />
          </Card.Body>
          <Card.Footer>
            <Link style={{ color: "black" }} to={"/felibraries/reactbootstrap"}>
              Read More
            </Link>
          </Card.Footer>
        </Card>
        <Card bg={"dark"}>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg={"dark"}>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default FrontEndCards;
