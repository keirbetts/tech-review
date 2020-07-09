import React from 'react';
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "@reach/router";


const FrontEndCards = () => {
  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>React Bootstrap</Card.Title>
            <Card.Text>
              React component integrated with Bootstrap styling
          </Card.Text>
            <Link style={{ color: 'black' }} to={'/felibraries/reactbootstrap'}>Link</Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
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
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
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