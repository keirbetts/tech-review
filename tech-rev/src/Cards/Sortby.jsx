import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SortbyFunctionality from './SortbyFunctionality';
import RatingSort from './RatingSort';

class Sortby extends Component {
  state = {
    packages: ['React-Bootstrap', 'React-MDL', 'Semantic-UI',
      'Material-UI'],
    ratings: [5, 4, 4, 2]
  }


  onClick = (event) => {
    event.preventDefault()
    this.setState(currentState => {
      return { packages: currentState.packages.sort() }
    })
  }
  handleClick = (event) => {
    event.preventDefault()
    this.setState(currentState => {
      return { packages: currentState.ratings.sort() }
    })
  }

  render() {
    return (
      <div style={{ color: 'white' }}>

        <Button onClick={this.onClick}>Sort Items Alphabetically</Button>
        <br></br>
        <br></br>
        <Button onClick={this.handleClick}>Sort Items By Rating</Button>
        <SortbyFunctionality packages={this.state.packages} />
        <RatingSort ratings={this.state.ratings} />
      </div>
    );
  }
}

export default Sortby;