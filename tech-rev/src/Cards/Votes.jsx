import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Votes extends Component {
  state = { count: 0 }

  handleClick = (event) => {
    this.setState(currentState => {
      return { count: currentState.count + 1 }
    })
  }
  handleDownVote = (event) => {
    this.setState(currentState => {
      return { count: currentState.count - 1 }
    })
  }

  render() {
    return (
      <div>
        <Button variant='outline-light' onClick={this.handleClick}>Like Library</Button>
        <Button variant='outline-light' onClick={this.handleDownVote}>Dislike Library</Button>
        <p>Likes: {this.state.count}</p>
      </div>
    );
  }
}

export default Votes;