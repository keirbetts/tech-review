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
        <p>Likes: {this.state.count}</p>
        {this.state.count <= 1 ?
          <Button variant='success' onClick={this.handleClick}>Up    Vote</Button>
          : alert('You may only vote once')}
        <br></br>
        <br></br>
        {this.state.count >= -1 ?
          <Button variant='danger' onClick={this.handleDownVote}>Downvote</Button>
          : alert('You may only vote once')
        }
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Votes;